<template>
	<div>
		<h2>Tags List</h2>
		<button type="button" v-on:click="flushTags()">Flush</button>

		<br/>
        <br/>

        <div class="tag-display" v-for="tag of tags">
            <u-tag v-bind:tag="tag"></u-tag>
            <br/>
        </div>

    	<!-- <span v-for="tag of tags">
    		<p>
    		<strong>Data :</strong><br/>
    		EPC : {{ tag.data.epc }}<br/>
    		RSSI : {{ tag.data.rssi}}<br/>
    		<br/>
    		<strong>Cartesian position:</strong><br/>
    		X : {{ tag.cartesian_pos.x}}<br/>
    		Y : {{ tag.cartesian_pos.y}}<br/>
    		Z : {{ tag.cartesian_pos.z}}<br/>
    		Timestamp : {{ tag.cartesian_pos.timestamp}}<br/>
    		</p>
    		<br/>
    		<br/>
    	</span> -->
	</div>
</template>

<script>
import UTag from './UTag.vue';
export default {
    name: 'u-display-tag',
    data: function() {
       return {
          isOpen: this.active
        }
 	},
 	methods: {
 		flushTags(){
 			this.tags = [];
 			this.$emit('flush-tags');
 		},
        toggle() {
            this.isOpen = !this.isOpen;
        }
 	},
    props: {
    	tags: Array
    },
    components: {
        UTag
    }
}
</script>

<style>
.tag-display{
    margin: auto;
}
</style>