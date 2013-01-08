var mqtt = require('../lib/mqtt');

mqtt.createSecureClient(1883, "127.0.0.1", "private-key.pem", "public-cert.pem", function(err,client) {
	if ( client ) {
		console.log("Client isn't null");
		client.connect({ keepalive: 60, client: "tls_test_client" });
		client.on("connack", function(packet) {
			console.log( JSON.stringify(packet) );
		});
	} else {
		console.log("Error " + JSON.stringify(err));
	}
});