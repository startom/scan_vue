<template>
	<div class="topnav">
        <a class="title">IRIS Scanner data fetching</a>

        <a class="socketStatus">b</a>
	</div>
</template>

<script>
export default {
    name: 'u-nav',
    data: function() {
       return {
          
        }
 	},
 	methods: {

 	},
    props: {
    	
    },

}
</script>

<style>
.topnav {
    background-color: #333;
    overflow: hidden;
    height: 50px;
    position: relative;
}
.title {
    float: none;
    padding: 14px 18px;
    color: white;
    font-size: 30px;
    background-color: #4caf50;
}
.socketStatus {
    float: right;
    color: white;
    font-size: 15px;
    padding-right: 20px;
}
</style>