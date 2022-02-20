<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <b-field label="Title">
            <b-input type="text" v-model="story.title" placeholder="Awesome Title"/>
          </b-field>

          <b-field label="Source">
            <b-input type="text" v-model="story.source" placeholder="Waste 360:  Republic Services expands this great option to many of its customers"/>
          </b-field>

          <b-field label="Select a date">
            <b-datepicker
              v-model="story.publicationDate"
              placeholder="Click to select..."
              icon="calendar-today"
              trap-focus>
            </b-datepicker>
          </b-field>

          <br>
          <div class="editor content ">
            <editor-menu-bar :editor.sync="story.editor" v-slot="{ commands, isActive }">
              <div class="menubar">

                <b-tooltip label="header rule">
                  <button class="menubar__button" :class="{ 'is-active': isActive.bold() }"
                          @click="commands.bold">
                    <b-icon icon="format-bold"/>
                  </button>
                </b-tooltip>

                <b-tooltip label="header rule">
                  <button class="menubar__button"
                          :class="{ 'is-active': isActive.italic() }" @click="commands.italic">
                    <b-icon icon="format-italic"/>
                  </button>
                </b-tooltip>

                <b-tooltip label="header rule">
                  <button class="menubar__button"
                          :class="{ 'is-active': isActive.strike() }" @click="commands.strike">
                    <b-icon icon="format-strikethrough-variant"/>
                  </button>
                </b-tooltip>

                <b-tooltip label="header rule">
                  <button class="menubar__button"
                          :class="{ 'is-active': isActive.underline() }" @click="commands.underline">
                    <b-icon icon="format-underline"/>
                  </button>
                </b-tooltip>

                <b-tooltip label="header rule">
                  <button class="menubar__button"
                          :class="{ 'is-active': isActive.paragraph() }" @click="commands.paragraph">
                    <b-icon icon="format-paragraph"/>
                  </button>
                </b-tooltip>

                <b-tooltip label="header rule">
                  <button class="menubar__button"
                          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                          @click="commands.heading({ level: 1 })">
                    <b-icon icon="format-header-1"/>
                  </button>
                </b-tooltip>

                <b-tooltip label="header rule">
                  <button class="menubar__button"
                          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                          @click="commands.heading({ level: 2 })">
                    <b-icon icon="format-header-2"/>
                  </button>
                </b-tooltip>

                <b-tooltip label="header rule">
                  <button class="menubar__button"
                          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                          @click="commands.heading({ level: 3 })">
                    <b-icon icon="format-header-3"/>
                  </button>
                </b-tooltip>

                <b-tooltip label="header rule">
                  <button class="menubar__button"
                          :class="{ 'is-active': isActive.bullet_list() }" @click="commands.bullet_list">
                    <b-icon icon="format-list-bulleted"/>
                  </button>
                </b-tooltip>

                <b-tooltip label="header rule">
                  <button class="menubar__button"
                          :class="{ 'is-active': isActive.ordered_list() }" @click="commands.ordered_list">
                    <b-icon icon="format-list-numbered"/>
                  </button>
                </b-tooltip>

                <b-tooltip label="header rule">
                  <button class="menubar__button"
                          :class="{ 'is-active': isActive.blockquote() }" @click="commands.blockquote">
                    <b-icon icon="format-quote-close"/>
                  </button>
                </b-tooltip>

                <b-tooltip label="header rule">
                  <button class="menubar__button" @click="commands.horizontal_rule">
                    <b-icon icon="format-page-break"/>
                  </button>
                </b-tooltip>

                <b-tooltip label="header rule">
                  <button class="menubar__button" @click="commands.undo">
                    <b-icon icon="undo"/>
                  </button>
                </b-tooltip>

                <b-tooltip label="header rule">
                  <button class="menubar__button" @click="commands.redo">
                    <b-icon icon="redo"/>
                  </button>
                </b-tooltip>

              </div>
            </editor-menu-bar>

            <editor-content class="editor__content" :editor.sync="story.editor"/>
          </div>


          <b-field>
            <b-taginput v-model="tags"
                        :data="filteredTags"
                        ellipsis
                        field=""
                        icon="label"
                        :allow-new="true"
                        :autocomplete="true"
                        placeholder="Add tags separated by a comma(,) "
                        @typing="getFilteredTags">
            </b-taginput>
          </b-field>

<!--          <b-field>-->
<!--            <b-upload v-model="dropFiles"-->
<!--                      multiple-->
<!--                      drag-drop-->
<!--                      expanded>-->
<!--              <section class="section">-->
<!--                <div class="content has-text-centered">-->
<!--                  <p class="has-text-centered">-->
<!--                    <b-icon-->
<!--                      icon="upload"-->
<!--                      size="is-large">-->
<!--                    </b-icon>-->
<!--                  </p>-->
<!--                  <p class="has-text-centered">Drop your files here or click to upload</p>-->
<!--                </div>-->
<!--              </section>-->
<!--            </b-upload>-->
<!--          </b-field>-->

          <div class="buttons">
            <b-button @click="redirect('/news')" type="is-danger">Cancel</b-button>
            <b-button @click="saveStory" type="is-success">Save</b-button>
          </div>
        </div>
      </div>
    </div>
  </section>
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
    middleware: ['auth'],
    data() {
      return {
        story: {
          editor: null,
          title: '',
          publicationDate: new Date,
          bodyCopy: {},
          source: '',
          // files: []
        },
        tags: [],
        tagCount: 0,
        allTags: [],
        filteredTags: [],
        dropFiles: []
      }
    },
    async asyncData({$axios, route}) {
      return {
        allTags: await $axios.get(`/news/tags/getAll`).then(res => {
          return res.data
        })
      }
    },
    mounted() {
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
        ]
      });

      this.$axios.get(`/news/getById/${this.$route.query.post}`).then(res => {
        this.story.title = res.data.title;
        this.story.publicationDate = new Date(res.data.publicationDate);
        this.tags = res.data.tags;
        this.story._id = res.data._id;
        this.story.editor.setContent(res.data.bodyCopy);
        this.story.source = res.data.source
      }).catch(err => {
        this.story.editor.setContent(`
          <p>
            Hi there,
            this is a very <em>basic</em> example story.
          </p>
          <ul>
            <li>
              A regular list
            </li>
            <li>
              With regular items
            </li>
          </ul>
          <blockquote>
            It's amazing 👏
            <br />
            – mom
          </blockquote>
        `)
      });

    },
    beforeDestroy() {
      if (!!this.story.editor)
        this.story.editor.destroy()
    },
    methods: {
      saveStory() {
        let data = {
          title: this.story.title,
          publicationDate: this.story.publicationDate,
          bodyCopy: this.story.editor.getJSON(),
          summary: this.story.editor.getJSON().content.filter(x => {
            return x.type === "paragraph"
          })[0].content.map(x => {
            return x.text
          }).join(' ').trim().substr(0, 150).trim() + '...',
          slug: slugify(this.story.title),
          tags: this.tags,
          source: this.story.source
        };


        let endpoint = 'create';

        if (!!this.story._id) {
          data._id = this.story._id;
          endpoint = 'update'
        }

        this.$axios.post(`/news/${endpoint}`, data, {proxy: true}).then(res => {
          if (res.status == 200) {
            this.redirect('/news')
          } else {
            this.$buefy.toast.open({type: 'is-daanger', message: 'Error occurred while saving!'})
          }
        }).catch(err => {
          this.$buefy.toast.open({type: 'is-danger', message: 'Error occurred while saving!'})
        })
      },
      fileUpload(){
        this.$axios.post('/news/attachment').then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        })
      },
      redirect(whereTo) {
        this.$router.push(whereTo)
      },
      getFilteredTags(text) {
        text = text.toLowerCase();
        return this.filteredTags = this.allTags.filter((option) => {
          return (option.toLowerCase().indexOf(text) >= 0)
        })
      },
      storyDetails() {
        console.log(this.story);
      }
    },
    watch: {
      tags: function(v) {
        if (v.length > this.tagCount){
          if (!(v.indexOf('Case Study') > -1) && v.indexOf('Research') > -1)
            this.tags.push('Case Study')

          if (v.indexOf('Case Study') > -1 && !(v.indexOf('Research') > -1))
            this.tags.push('Research')
        }

        if (v.length < this.tagCount){
          if (!(v.indexOf('Case Study') > -1) && v.indexOf('Research') > -1)
            this.tags.splice(this.tags.indexOf('Research'), 1)

          if (v.indexOf('Case Study') > -1 && !(v.indexOf('Research') > -1))
            this.tags.splice(this.tags.indexOf('Case Study'), 1)
        }

        this.tagCount = v.length
      }
    }
  }


  // https://gist.github.com/hagemann/382adfc57adbd5af078dc93feef01fe1
  function slugify(string) {
    const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
    const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
    const p = new RegExp(a.split('').join('|'), 'g')

    return string.toString().toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
      .replace(/&/g, '-and-') // Replace & with 'and'
      .replace(/[^\w\-]+/g, '') // Remove all non-word characters
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, '') // Trim - from end of text
  }
</script>


<style lang="sass">
  .menubar
    margin-bottom: 1.5rem

  .ProseMirror
    border: 1px solid #dbdbdb
    padding: 1rem 1.5rem !important

</style>
