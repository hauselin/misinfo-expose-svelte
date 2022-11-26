
export default {
	"config": { "view": { "stroke": null }, "background": "#295b89" },
	"$schema": "https://vega.github.io/schema/vega-lite/v5.json",
	"description": "Misinformation exposure density",

	"layer": [{
		"data": {
			"url": "./dist_simulated.json"
		},
		"mark": { "type": "area", "color": "#b4c1cf" },
		"transform": [{ "density": "value", "bandwidth": 0.0, "extent": [0, 1] }],
		"encoding": {
			"x": { "field": "value", "title": "", "type": "quantitative", "axis": { "domain": false, "grid": false, "ticks": false, "labelColor": "white", } },
			"y": {
				"field": "density", "type": "quantitative", "title": "", "axis": { "domain": false, "grid": false, "ticks": false, "labels": false }
			},
			"tooltip": { "field": "value" }
		},
	}, {
		"mark": { "type": "rule", "color": "#91e5f6" },
		"data": { "values": [{ "value": 0.5 }] },
		"encoding": {
			"x": { "field": "value", "title": "", "type": "quantitative", "axis": { "domain": false, "grid": false, "ticks": false, "labelColor": "white", } },
			"size": { "value": 4 },
			"tooltip": { "field": "value" }
		}
	}],
	"width": 300,
	"height": 275,
}
