<template>
	<div>
        <div class="u-anchor">
            <div class="anchor-header" @click="toggle">
                <span><strong>Anchor {{anchor.anchor.id}}</strong></span>
            </div>

            <div class="anchor-body" v-if="isOpen">
                <p><strong>MAC : </strong>{{anchor.anchor.device.mac}}</p>
                <p><strong>Cartesian coordinates : </strong></p>
                <p>x : {{anchor.cartPosition[0]}}</p>
                <p>y : {{anchor.cartPosition[1]}}</p>
                <p>z : {{anchor.cartPosition[2]}}</p>
            </div>
        </div>

	</div>
</template>

<script>

export default {
    name: 'u-anchor',
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
    	anchor: Object
    }
}
</script>

<style>
.anchor-header {
    background-color: #3366ff;
    padding: 14px 28px;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 16px;
}
.anchor-header:hover {
    background-color: #0039e6;
}
.anchor-body {
    border: solid;
    padding: 5px 28px;
    border-radius: 16px;
}
</style>