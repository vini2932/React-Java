package Principal;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Scanner;

import com.br.Banco.BancoCliente;
import com.br.Banco.BancoPassagem;

import Models.Cliente;
import Models.Passagem;


public class Principal {

	public static void main(String[] args) {
	
		// TODO Auto-generated method stub
		
		String retorno,retorno2;
		List <Cliente> clientes= new ArrayList <Cliente>();
		List<Passagem> passagens= new ArrayList<Passagem>();
		Scanner teclado=  new Scanner(System.in);
		System.out.println("Digite 1 para inserir os dados no banco de dados");
		System.out.println("Digite 2 para consultar os dados");
		System.out.println("Digite 3 para atualizar os dados");
		System.out.println("Digite 4 para deletar os dados");
		int nu=teclado.nextInt();
		
BancoCliente banco= new BancoCliente();
BancoPassagem banco2= new BancoPassagem();
if(nu==1) {
String nome,cpf,senha, email,embarque,destino;
int acompanhantes;
String ida,volta;
System.out.println("Digite os dados para adicionar ao banco de dados");
System.out.print("Digite o nome");
nome=teclado.next();
System.out.print("Digite o cpf");
cpf=teclado.next();
System.out.print("Digite a senha");
senha=teclado.next();
System.out.print("Digite o email");
email=teclado.next();



System.out.print("Digite o embarque");
embarque=teclado.next();
System.out.print("Digite o destino");
destino=teclado.next();
System.out.print("Digite quantas pessoas iram acompanhar você");
acompanhantes=teclado.nextInt();
System.out.print("Digite a data de ida");
ida=teclado.next();
System.out.print("Digite a volta");
volta=teclado.next();
	retorno=banco.Colocar(nome,cpf,senha,email);
	retorno2=banco2.Colocar(embarque, destino, acompanhantes, ida, volta);
	System.out.println("Os dados do usuario foi bem sucedida"+retorno);
	System.out.println("Tabela Passagem: "+retorno2);
	
	
}else if(nu==2) {
	clientes=banco.Consultar();
	for(Cliente e: banco.Consultar()) {
		System.out.println("Cliente Nome: "+e.getNome());
		System.out.println("Cliente Cpf: "+e.getCpf());
		System.out.println("Cliente Email: "+e.getEmail());
		System.out.println("Cliente Senha: "+e.getSenha());
		
	passagens=banco2.Consultar();
	for(Passagem e1: banco2.Consultar()) {
		System.out.println("Passagem embarque "+e1.getEmbarque());
		System.out.println("Passagem destino "+e1.getDestino());
		System.out.println("Passagem acompanhantes "+e1.getAcompanhantes());
		System.out.println("Passagem ida "+e1.getIda());
		System.out.println("Passagem volta "+e1.getVolta());
	}
	}	
}else if(nu==3) {
	
	
	String nome,cpf,senha, email;
	int acompanhantes;
	String ida,volta,embarque, destino;
	System.out.println("Digite qual id você deseja atualizar da tabela");
	int id=teclado.nextInt();
	
	System.out.println("Digite os dados para atualizar o banco de dados");
	System.out.print("Digite o nome");
	nome=teclado.next();
	System.out.print("Digite o cpf");
	cpf=teclado.next();
	System.out.print("Digite a senha");
	senha=teclado.next();
	System.out.print("Digite o email");
	email=teclado.next();
	
	retorno=banco.Atualizar(id,nome,cpf,senha,email);
	System.out.println(retorno);
	System.out.print("Digite o embarque");
	embarque=teclado.next();
	System.out.print("Digite o destino");
	destino=teclado.next();
	System.out.print("Digite quantas pessoas iram acompanhar você");
	acompanhantes=teclado.nextInt();
	System.out.print("Digite a data de ida");
	ida=teclado.next();
	System.out.print("Digite a volta");
	volta=teclado.next();
	retorno2=banco2.Atualizar(id, embarque, destino, acompanhantes, ida, volta);
	
}else if(nu==4) {
	System.out.println("Digite qual id você deseja Deletar da tabela");
	int id= teclado.nextInt();
 retorno=banco.Deletar(id);
 retorno2=banco2.Deletar(id);
System.out.println(retorno);
System.out.println(retorno2);
}else {
	System.out.println("Numero invalido");
}
		
	}

	
}
