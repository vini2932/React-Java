package com.br.Banco;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import Models.Cliente;
import Models.Passagem;

public class BancoPassagem {
	private String  usuario;
	private String senha;
	private  String url;
	String sql="";
	 Connection con;
		PreparedStatement pstm;
		ResultSet set;
		public BancoPassagem(){
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
			public String Colocar(String embarque, String destino, int acompanhantes,String ida,String volta) {
				try {
					sql="Insert into passagem (embarque,destino,acompanhantes,ida,volta) Values(?,?,?,?,?)";
				pstm=con.prepareStatement(sql);
				pstm.setString(1, embarque);
				pstm.setString(2, destino);
				pstm.setInt(3, acompanhantes);
				pstm.setString(4, ida);
				pstm.setString(5, volta);
				pstm.execute();
				return("Foi inserido os dados na tabela com sucesso");
			
				}catch(Exception e) {
					e.printStackTrace();
					return("Não foi possivel inserir os dados na tabela");
				}
				
				
		
		}
			public String Deletar(int id) {
				try {
				sql="Delete from passagem Where id=?";
				pstm=con.prepareStatement(sql);
				pstm.setInt(1,id );
				pstm.execute();
				return("A coluna foi deletada com sucesso");
				}catch(Exception e) {
					e.printStackTrace();
					return("ão foi possivel excluir a coluna");
				}
			}
			
			
			public List <Passagem> Consultar() {
			List <Passagem> passagens = new ArrayList<Passagem>();
		
				try {
					sql="Select *from passagem";
					pstm=con.prepareStatement(sql);
					set=pstm.executeQuery();
					
					while(set.next()) {
						Passagem passagem = new Passagem();
					
			
				passagem.setEmbarque(set.getString("embarque"));
				passagem.setDestino(set.getString("destino"));
				passagem.setAcompanhantes(set.getInt("acompanhantes"));
				passagem.setIda(set.getString("ida"));
				passagem.setVolta(set.getString("volta"));
				passagens.add(passagem);
					}
				}catch(Exception e) {
					e.printStackTrace();
				}
				
				return(passagens);
			}
			
			
			public String Atualizar(int id, String embarque, String destino, int acompanhantes,String ida,String volta) {
				try {
				sql="UPDATE passagem SET embarque=?, destino=?, acompanhantes=?, ida=?,volta=? WHERE id=?";
				
				pstm=con.prepareStatement(sql);
				pstm.setString(1, embarque);
				pstm.setString(2, destino);
				pstm.setInt(3, acompanhantes);
				pstm.setString(4,ida);
				pstm.setString(5,volta) ;
				pstm.setInt(6, id);
				pstm.execute();
				return("Os dados foram atualizados com sucesso");
				}catch(Exception e) {
					e.printStackTrace();
					return("Não foi possivel atualizar os dados");
				}
				
			}
}
