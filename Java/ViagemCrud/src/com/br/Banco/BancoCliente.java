package com.br.Banco;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import Models.Cliente;

public class BancoCliente {
private String  usuario;
private String senha;
private  String url;
String sql="";
 Connection con;
	PreparedStatement pstm;
	ResultSet set;
	public BancoCliente(){
		usuario="postgres";
		senha="vi";
		url="jdbc:postgresql://localhost:5432/Viagem";
		
		
		try {
			Class.forName("org.postgresql.Driver");
			con=DriverManager.getConnection(url,usuario,senha);
			System.out.println("A conexão deu certo");
			
			
		}catch(Exception e) {
			e.printStackTrace();
		}
		
	}	
		public String Colocar(String nome, String cpf, String senha,String email) {
			try {
				sql="Insert into cliente (Nome,cpf,senha,email) Values(?,?,?,?)";
			pstm=con.prepareStatement(sql);
			pstm.setString(1, nome);
			pstm.setString(2, cpf);
			pstm.setString(3, senha);
			pstm.setString(4, email);
			pstm.execute();
			return("Foi inserido os dados na tabela com sucesso");
		
			}catch(Exception e) {
				e.printStackTrace();
				return("Não foi possivel inserir os dados na tabela");
			}
			
			
	
	}
		public String Deletar(int id) {
			try {
			sql="Delete from cliente Where id=?";
			pstm=con.prepareStatement(sql);
			pstm.setInt(1,id );
			pstm.execute();
			return("A coluna foi deletada com sucesso");
			}catch(Exception e) {
				e.printStackTrace();
				return("ão foi possivel excluir a coluna");
			}
		}
		
		
		public List <Cliente> Consultar() {
		List <Cliente> clientes = new ArrayList<Cliente>();
	
			try {
				sql="Select *from cliente";
				pstm=con.prepareStatement(sql);
				set=pstm.executeQuery();
				
				while(set.next()) {
					Cliente cliente = new Cliente();
				
		
			cliente.setNome(set.getString("nome"));
			cliente.setCpf(set.getString("cpf"));
			cliente.setEmail(set.getString("email"));
			cliente.setSenha(set.getString("senha"));
			clientes.add(cliente);
			
				}
			}catch(Exception e) {
				e.printStackTrace();
			}
			
			return(clientes);
		}
		
		
		public String Atualizar(int id, String nome, String cpf, String senha,String email) {
			try {
			sql="UPDATE cliente SET nome=?, cpf=?, senha=?, email=? WHERE id=?";
			
			pstm=con.prepareStatement(sql);
			pstm.setString(1, nome);
			pstm.setString(2, cpf);
			pstm.setString(3, senha);
			pstm.setString(4, email);
			pstm.setInt(5, id);
			pstm.execute();
			return("Os dados foram atualizados com sucesso");
			}catch(Exception e) {
				e.printStackTrace();
				return("Não foi possivel atualizar os dados");
			}
			
		}
		
}

