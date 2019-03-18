<template>
	<div>
		<h2>Anchors List</h2>

		<button type="button" v-on:click="flushAnchors()">Flush</button>

		<br/>
        <br/>

        <div class="anchor-display" v-for="anchor of anchors.anchors">
            <u-anchor v-bind:anchor="anchor"></u-anchor>
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
import UAnchor from './UAnchor.vue';
export default {
    name: 'u-display-anchor',
    data: function() {
       return {
          isOpen: this.active
        }
 	},
 	methods: {
 		flushAnchors(){
 			this.$emit('flush-anchors');
 		},
        toggle() {
            this.isOpen = ! this.isOpen;
        }
 	},
    props: {
    	anchors: Array
    },
    components: {
        UAnchor
    }
}
</script>

<style>
.anchor-display{
    margin: auto;
}
</style>