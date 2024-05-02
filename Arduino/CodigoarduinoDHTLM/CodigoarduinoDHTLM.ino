//Sensor de temperatura usando o LM35
#include "DHT.h"
#define dht_type DHT11

int dht_pin = A0;
const int LM35 = A1; // Define o pino que lera a saída do LM35
float temperatura;
 // Variável que armazenará a temperatura medida
DHT dht_1 = DHT(dht_pin, dht_type);
 
//Função que será executada uma vez quando ligar ou resetar o Arduino
void setup() {
Serial.begin(9600); // inicializa a comunicação serial
dht_1.begin();
}
 
//Função que será executada continuamente
void loop() {
float umidade = dht_1.readHumidity();
temperatura = (float(analogRead(LM35))*5/(1023))/0.01;


  Serial.print(temperatura);
  Serial.print(';');
  Serial.println(umidade);
  

delay(6000);
}