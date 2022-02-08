package Models;

import java.sql.Date;

public class Passagem {
private String embarque;
private String destino;
private int acompanhantes;
private String ida;
private String volta;




public String getEmbarque() {
	return embarque;
}
public void setEmbarque(String embarque) {
	this.embarque = embarque;
}
public String getDestino() {
	return destino;
}
public void setDestino(String destino) {
	this.destino = destino;
}
public int getAcompanhantes() {
	return acompanhantes;
}
public void setAcompanhantes(int acompanhantes) {
	this.acompanhantes = acompanhantes;
}
public String getIda() {
	return ida;
}
public void setIda(String ida) {
	this.ida = ida;
}
public String getVolta() {
	return volta;
}
public void setVolta(String volta) {
	this.volta = volta;
}

}


