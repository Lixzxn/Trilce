
const map = L.map("map");


L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);


const sedes = [
{
nombre:"Breña",
lat:-12.050851474604945,
lng:-77.0433477441376,
direccion:"Jr. Zorritos 159"
},
{
nombre:"Callao",
lat:-12.059259773032538,
lng:-77.1329570968952,
direccion:"Av. Sáenz Peña 1115"
},
{
nombre:"Chorrillos",
lat:-12.204598318137036,
lng:-77.00845453737647,
direccion:"Av. Alameda Los Horizontes Mz. I-1 Lote 1"
},
{
nombre:"Comas",
lat:-11.953397663209714,
lng:-77.05963084060929,
direccion:"Jr. Asunción 825"
},
{
nombre:"La Molina",
lat:-12.073867720285344,
lng:-76.96239731517169,
direccion:"Av. Javier Prado Este 5431"
},
{
nombre:"Los Olivos",
lat:-12.010779211436931,
lng:-77.06854569656052,
direccion:"Av. Tomás Valle 845"
},
{
nombre:"Maranga",
lat:-12.076803519368541,
lng:-77.0909748308231,
direccion:"Calle Martín de Murúa 120"
},
{
nombre:"Marsano",
lat:-12.147681130996054,
lng:-76.98311477286131,
direccion:"Av. Morro Solar s/n"
},
{
nombre:"Pro",
lat:-11.926888529947526,
lng:-77.07326660117542,
direccion:"Panamericana Norte km 23.50"
},
{
nombre:"Roma",
lat:-12.07269948969289,
lng:-77.03231399508368,
direccion:"Jr. Emilio Fernández 641"
},
{
nombre:"Salamanca",
lat:-12.080048247002754,
lng:-76.98496613367794,
direccion:"Jr. Las Tunas 272"
},
{
nombre:"Salaverry",
lat:-12.07822723103016,
lng:-77.03503971469046,
direccion:"Av. Arequipa 1381"
},
{
nombre:"San Isidro",
lat:-12.100861894149737,
lng:-77.03184395825707,
direccion:"Av. Arequipa 3505"
},
{
nombre:"San Juan de Lurigancho",
lat:-11.97445462892236,
lng:-76.9937138048369,
direccion:"Jr. El Rosario 530"
},
{
nombre:"Santa Anita",
lat:-12.032746924597037,
lng:-76.95231009143406,
direccion:"Jr. José María Eguren"
},
{
nombre:"Villa El Salvador",
lat:-12.22072341715182,
lng:-76.9530264905479,
direccion:"Av. Separadora Agroindustrial"
},
{
nombre:"Villa María del Triunfo",
lat:-12.165185451191604,
lng:-76.9473441133072,
direccion:"Av. El Triunfo 455"
},
{
nombre:"Ñaña",
lat:-11.983410488753398,
lng:-76.82635157271928,
direccion:"Av. Bernardo Balaguer Lote 5"
}
];


const grupo = L.featureGroup();

sedes.forEach(sede=>{

const marker=L.marker([sede.lat,sede.lng]).addTo(map);

marker.bindPopup(`
<h3 style="margin:0;color:#ff7a00;">🏫 Trilce ${sede.nombre}</h3>

<p>${sede.direccion}</p>

<a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(sede.direccion+", Lima, Perú")}" target="_blank">
📍 Cómo llegar
</a>
`);

grupo.addLayer(marker);

});

map.fitBounds(grupo.getBounds(),{
padding:[40,40]
});
