<template>
    <div>
        <h2>Stats</h2>
        <div>
            <p>Unique tags scanned : {{ nb_tags }}</p>
        </div>

    </div>

</template>

<script>
export default {
	name: 'u-stats',
	data: function() {
	   return {
            
	    }
  	},
    props: {
        tags: Array
    },
    methods: {

  },
  computed: {
    nb_tags: function() {
        return this.tags.length;
    }
  }
}
</script>

<style>
	#form {

	}
</style>
