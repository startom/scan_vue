<template>
    <div>
        <h2>Tags locations</h2>

        <br/>

    	<div id="map" class="map">

    	</div>
    </div>
</template>

<script>
import * as Vue2Leaflet from 'vue2-leaflet';

export default {
    name: 'u-map',
    data: function() {
       return {
          map: null,
          bounds: null,
          image: null,
          layers: [],
          anchorsLayer: new L.layerGroup(),
          tagsLayer: new L.layerGroup(),
          greenIcon: null,
          orangeIcon: null,
          redIcon: null
        }
 	  },
    props: {
      tags: Array,
      anchors: Array,
    },
    mounted: function(){

        this.map = L.map('map', {
            crs: L.CRS.Simple,
            minZoom: -5
        });
        this.bounds = [[-301, -298], [294,292]];
        this.image = L.imageOverlay('./static/map_grid.jpg', this.bounds).addTo(this.map);
        this.map.fitBounds(this.bounds);        

        this.greenIcon = new L.Icon({
          iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        });

        this.orangeIcon = new L.Icon({
          iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        });

        this.redIcon = new L.Icon({
          iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        });

        var overlayMaps = {
          "Tags": this.tagsLayer,
          "Anchors": this.anchorsLayer
        };

        L.control.layers(null, overlayMaps).addTo(this.map);

    },
    watch: {
        tags: function(){
            var markers = [];

            this.tagsLayer.clearLayers();

            console.log('watcher called (tag)');

            for(var i = 0; i < this.tags.length; i++){
              console.log(this.tags[i].data.rssi);
                markers[i] = L.latLng([this.tags[i].cartesian_pos.x*29.5, this.tags[i].cartesian_pos.y*29.5]);
                if(this.tags[i].data.rssi >= -35){
                  L.marker(markers[i], {icon: this.greenIcon}).bindPopup("Tag " + this.tags[i].data.epc).addTo(this.tagsLayer);
                }
                else if(this.tags[i].data.rssi < -35 && this.tags[i].data.rssi >= -60){
                  L.marker(markers[i], {icon: this.orangeIcon}).bindPopup("Tag " + this.tags[i].data.epc).addTo(this.tagsLayer);
                }
                else if(this.tags[i].data.rssi < -60){
                  L.marker(markers[i], {icon: this.redIcon}).bindPopup("Tag " + this.tags[i].data.epc).addTo(this.tagsLayer);
                }
                  
            }

            this.tagsLayer.addTo(this.map);

        },
        anchors: function(){
            var markers = [];

            this.anchorsLayer.clearLayers();

            console.log('watcher called (anchor)');

            for(var i = 0; i < this.anchors.anchors.length; i++){
                markers[i] = L.latLng([this.anchors.anchors[i].cartPosition[0]*29.5, this.anchors.anchors[i].cartPosition[1]*29.5]);
                L.marker(markers[i]).bindPopup("Anchor " + this.anchors.anchors[i].anchor.id).addTo(this.anchorsLayer);
            }

            this.anchorsLayer.addTo(this.map);

        }
    },
  }
</script>

<style>
.map {
    height: 600px;
}
</style>
