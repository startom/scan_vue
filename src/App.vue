<template>
  <div id="app">

    <!-- <u-nav></u-nav> -->

    <h1 class="center">Scanner data fetching</h1>

        <div>
            <p v-if="isConnected">Connected to the server</p>
            <p>Message from server: "{{socketMessage}}"</p>
            <button @click="pingServer()">Ping Server</button>
        </div>

     <ul v-if="errors && errors.length">
        <li v-for="error of errors">
          {{error.message}}
        </li>
     </ul>

     <div class="row">
        <div class="column">
            <u-map v-bind:anchors="anchors" v-bind:tags="tags" class="center"></u-map>
            <u-stats v-bind:tags="tags" class="center"></u-stats>
            <br/>
            <u-form @new-array="addArray" v-bind:tags="tags" class="center"></u-form>
        </div>
        <div class="column">
            <u-display-tag v-bind:tags="tags" @flush-tags="flushTags()"></u-display-tag>
            <u-display-anchor v-if="str_anchors != '[]'" v-bind:anchors="anchors" @flush-anchors="flushAnchors()"></u-display-anchor>
        </div>
    </div>

  </div>
</template>

<script>
import UForm from './components/UForm.vue';
import UDisplayTag from './components/UDisplayTag.vue';
import UDisplayAnchor from './components/UDisplayAnchor.vue';
import UStats from './components/UStats.vue';
import UMap from './components/UMap.vue';
import UNav from './components/UNav.vue';

export default {
  name: 'App',
  data: function() {
       return {
          title: 'App title',
          arr: [],
          tags: [],
          str_tags: '',
          anchors: [],
          str_anchors: '',
          errors: [],
          isConnected: false,
          socketMessage: ''
        }
  },
  methods: {
    addArray(array){
        this.tags.push(array);
    },
    saveTags(array){
        this.tags = array;
    },
    pingServer() {
        this.$socket.emit('pingServer')
    },
    flushTags(){
        this.$socket.emit('flushTags')
        this.tags = [];
    },
    flushAnchors(){
        this.$socket.emit('flushAnchors')
        this.anchors = [];
    }
  },
  sockets: {
    connect: function() {
      this.isConnected = true;
    },

    disconnect: function() {
      this.isConnected = false;
    },

    messageChannel: function(data) {
      this.socketMessage = data;
    },
    tagsChannel: function(data) {
        if(this.str_tags != data){
            this.str_tags = data;
            this.tags = JSON.parse(data);
        }
    },
    anchorsChannel: function(data) {
        if(this.str_anchors != data){
            this.str_anchors = data;
            this.anchors = JSON.parse(data);
        }
    }
  },
  components: {
    UForm,
    UDisplayTag,
    UDisplayAnchor,
    UStats,
    UMap,
    UNav
  }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
    }
.row {
    display: flex;
}
.column {
    margin-right: 20px;
    margin-left: 20px;
    flex: 50%;
}
.center {
    text-align: center;
}
</style>
