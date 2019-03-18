<template>
	<div>
        <div class="u-tag">
            <div class="tag-header" @click="toggle">
                <span><strong>Tag {{tag.data.epc}}</strong></span>
            </div>

            <div class="tag-body" v-if="isOpen">
                <p><strong>RSSI : </strong>{{tag.data.rssi}}</p>
                <p><strong>Cartesian coordinates : </strong></p>
                <p>x : {{tag.cartesian_pos.x}}</p>
                <p>y : {{tag.cartesian_pos.y}}</p>
                <p>z : {{tag.cartesian_pos.z}}</p>
                <p><strong>Timestamp : </strong>{{tag.cartesian_pos.timestamp}}</p>
            </div>
        </div>

	</div>
</template>

<script>
import UTagDetails from './UTagDetails.vue';

export default {
    name: 'u-tag',
    data: function() {
       return {
          isOpen: this.active
        }
 	},
 	methods: {
        toggle() {
            this.isOpen = !this.isOpen;
        }
 	},
    props: {
    	tag: Object
    },
    components: {
        UTagDetails
    }
}
</script>

<style>
.tag-header {
    background-color: #00cc00;
    padding: 14px 28px;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 16px;
}
.tag-header:hover {
    background-color: #009900;
}
.tag-body {
    border: solid;
    padding: 5px 28px;
    border-radius: 16px;
}
</style>