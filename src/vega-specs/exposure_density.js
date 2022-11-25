export default {
	"config": { "view": { "stroke": null }, "background": "#295b89" },
	"$schema": "https://vega.github.io/schema/vega-lite/v5.json",
	"description": "Misinformation exposure density",
	"data": {
		"url": "./dist_simulated.json"

	},
	"mark": { "type": "area", "color": "#b4c1cf" },
	"transform": [{ "density": "value", "bandwidth": 0.0, "extent": [0, 1] }],
	"encoding": {
		"x": { "field": "value", "title": "", "type": "quantitative", "axis": { "domain": false, "grid": false, "ticks": false, "labelColor": "white", } },
		"y": { "field": "density", "type": "quantitative", "title": "", "axis": { "domain": false, "grid": false, "ticks": false, "labels": false } }
	},
	"width": "350",
	"autosize": {
		"type": "fit",
		"contains": "padding"
	},

}
