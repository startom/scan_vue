<template>
  <div>
    <h2>Manual adding</h2>
    <form>
          <input type="text" v-model="epc" placeholder="EPC"/><br/>
          <input type="text" v-model="rssi" placeholder="RSSI" /><br/>
          <input type="text" v-model="x" placeholder="X" /><br/>
          <input type="text" v-model="y" placeholder="Y" /><br/>
          <input type="text" v-model="z" placeholder="Z" /><br/>
          <input type="text" v-model="timestamp" placeholder="Timestamp" /><br/>
          <button type="button" v-on:click="add()">Add</button>
    </form>
  </div>
</template>

<script>
export default {
	name: 'u-form',
	data: function() {
	   return {
	      epc: '',
	      rssi: '',
	      x: '',
	      y: '',
	      z: '',
	      timestamp: ''
	    }
  	},
    props: {
      tags: Array
    },
    methods: {
    	add: function (e) {

        var arr = [];
        arr.push({data: {epc: this.epc, rssi: this.rssi}, cartesian_pos: {x: this.x, y: this.y, z: this.z, timestamp: this.timestamp}});

    		this.tags.push(arr);
    }
  }
}
</script>

<style>
	#form {

	}
</style>
