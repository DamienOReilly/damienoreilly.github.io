class ChartjsChart extends window.HTMLElement{constructor(){const t=super();this._chartConfig={};return t}connectedCallback(){const t=document.createElement("canvas");this._canvas=t;this.appendChild(t);const a=t.getContext("2d");this.style.display="block";this._chart=new Chart(a,this._chartConfig)}set chartConfig(t){this._chartConfig=t;if(this._chart){const a=t.data.datasets;const s=this._chart.data.datasets;for(let t=0;t<a.length;t++){if(s[t]){a[t]._meta=s[t]._meta}s[t]=a[t]}this._chart.options=t.options;this._chart.update()}}}window.customElements.define("chart-component",ChartjsChart);