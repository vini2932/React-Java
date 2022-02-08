package com.br.Dao;

import java.sql.Connection;
import java.sql.PreparedStatement;

public class Dao {
PreparedStatement pstm;

Connection con;
String sql="Insert into passageiro (nome) Values(?)";

}
