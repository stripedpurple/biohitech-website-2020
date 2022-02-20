<template>
  <div>
    <rs-banner v-if="isResearch"/>
    <section class="section">
      <div class="container">
        <div class="columns is-desktop">
          <div class="column">
            <p class="subtitle">{{story.publicationDate | dateFormatter}}</p>
            <h1 class="title is-size-2-tablet">{{story.title}}</h1>
            <p class="has-text-grey-light" v-if="!!story.source">{{story.source}}</p>

<!--            <br>-->
            <div class="editor content disabled">
              <editor-content class="editor__content" :editor.sync="story.editor"/>
            </div>

            <BackButton/>
            <nuxt-link :to="`/news/edit?post=${story.slug}`" class="button is-info" v-if="!!$auth.user">
              <b-icon icon="pencil"/>&nbsp;&nbsp;&nbsp;&nbsp;Edit Story
            </nuxt-link>
          </div>
          <div class="column is-3-desktop is-full">
            <tag-cloud :articleTags="story.tags" :allTags="allTags"/>
          </div>
        </div>
      </div>
    </section>

    <meta-tags :title="story.title" :description="story.summary"/>
    <b-loading :is-full-page="true" :active.sync="isLoading" :can-cancel="false"></b-loading>
  </div>
</template>

<script>
  import {
    Editor,
    EditorContent,
    EditorMenuBar
  } from 'tiptap';
  import {
    Blockquote,
    CodeBlock,
    HardBreak,
    Heading,
    HorizontalRule,
    OrderedList,
    BulletList,
    ListItem,
    TodoItem,
    TodoList,
    Bold,
    Code,
    Italic,
    Link,
    Strike,
    Underline,
    History,
  } from 'tiptap-extensions';

  export default {
    components: {
      EditorContent,
      EditorMenuBar,
    },
    data() {
      return {
        isLoading: true,
        story: {
          editor: null,
          title: '',
          publicationDate: new Date,
          bodyCopy: {},
          summary: '',
          tags: [],
          allTags: [],
          source: '',
          slug: ''
        },
      }
    },
    async asyncData({$axios, route}) {
      return {
        allTags: await $axios.get(`/news/tags/getAll`).then(res => {
          return res.data
        })
      }
    },
    computed: {
      isResearch() {
        return !!this.story.tags ? (this.story.tags.indexOf('Research') > -1 || this.story.tags.indexOf('Case Study') > -1) : false
      }
    },
    mounted() {
      this.isLoading = true;
      this.story.editor = new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({
            levels: [1, 2, 3]
          }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
        ],
        editable: false
      });

      this.$axios.get(`/news/getById/${this.$route.params.post}`).then(res => {
        console.log(res);
        this.story.title = res.data.title;
        this.story.publicationDate = new Date(res.data.publicationDate);
        this.story.tags = res.data.tags;
        this.story.editor.setContent(res.data.bodyCopy);
        this.story.summary = res.data.summary;
        this.story.source = res.data.source;
        this.story.slug = res.data.slug;

        this.isLoading = false
      }).catch(err => {
        if (err.response.status === 404) {
          this.$nuxt.context.error({
            message: 'Sorry. This news article does not exist.😢',
            statusCode: 404
          });
        } else {
          this.$buefy.toast.open({
            message: 'An error occurred. Please try again later.',
            type: 'is-danger',
            duration: 3000
          });
        }

        this.isLoading = false
      });

    },
    beforeDestroy() {
      if (!!this.story.editor)
        this.story.editor.destroy()
    },
    filters: {
      dateFormatter(v) {
        if (!v) return ''

        v = new Date(v);
        return `${months[v.getMonth()]} ${v.getDate().toString().length === 1 ? '0' + v.getDate() : v.getDate()}, ${v.getFullYear()}`
      }
    }
  }

  let months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  }

</script>


<style scoped lang="sass">
</style>
