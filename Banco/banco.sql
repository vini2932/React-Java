--
-- PostgreSQL database dump
--

-- Dumped from database version 13.5
-- Dumped by pg_dump version 13.5

-- Started on 2022-02-07 22:18:53

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 204 (class 1259 OID 16574)
-- Name: Passagem_Cliente_venda; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Passagem_Cliente_venda" (
    "id_Cliente" integer,
    "id_Passagem" integer
);


ALTER TABLE public."Passagem_Cliente_venda" OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 16548)
-- Name: cliente_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cliente_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 999999
    CACHE 1;


ALTER TABLE public.cliente_seq OWNER TO postgres;

--
-- TOC entry 201 (class 1259 OID 16550)
-- Name: cliente; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cliente (
    id integer DEFAULT nextval('public.cliente_seq'::regclass) NOT NULL,
    nome character varying NOT NULL,
    email character varying NOT NULL,
    cpf character varying NOT NULL,
    senha character varying NOT NULL
);


ALTER TABLE public.cliente OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 16561)
-- Name: passagem_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.passagem_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 999999
    CACHE 1;


ALTER TABLE public.passagem_seq OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 16563)
-- Name: passagem; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.passagem (
    id integer DEFAULT nextval('public.passagem_seq'::regclass) NOT NULL,
    embarque character varying NOT NULL,
    destino character varying NOT NULL,
    acompanhantes character varying NOT NULL,
    ida character varying NOT NULL,
    volta character varying NOT NULL
);


ALTER TABLE public.passagem OWNER TO postgres;

--
-- TOC entry 3008 (class 0 OID 16574)
-- Dependencies: 204
-- Data for Name: Passagem_Cliente_venda; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Passagem_Cliente_venda" ("id_Cliente", "id_Passagem") FROM stdin;
\.


--
-- TOC entry 3005 (class 0 OID 16550)
-- Dependencies: 201
-- Data for Name: cliente; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cliente (id, nome, email, cpf, senha) FROM stdin;
8	vinicius	vini@gmail.com	1324	4255
\.


--
-- TOC entry 3007 (class 0 OID 16563)
-- Dependencies: 203
-- Data for Name: passagem; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.passagem (id, embarque, destino, acompanhantes, ida, volta) FROM stdin;
8	rio	minas	7	20/09/2023	20/09/2024
\.


--
-- TOC entry 3014 (class 0 OID 0)
-- Dependencies: 200
-- Name: cliente_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cliente_seq', 8, true);


--
-- TOC entry 3015 (class 0 OID 0)
-- Dependencies: 202
-- Name: passagem_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.passagem_seq', 8, true);


--
-- TOC entry 2865 (class 2606 OID 16560)
-- Name: cliente cliente_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_id_key UNIQUE (id);


--
-- TOC entry 2867 (class 2606 OID 16558)
-- Name: cliente cliente_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_pkey PRIMARY KEY (id);


--
-- TOC entry 2869 (class 2606 OID 16571)
-- Name: passagem passagem_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.passagem
    ADD CONSTRAINT passagem_id_key UNIQUE (id);


--
-- TOC entry 2871 (class 2606 OID 16573)
-- Name: passagem passagem_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.passagem
    ADD CONSTRAINT passagem_pkey PRIMARY KEY (id);


--
-- TOC entry 2872 (class 2606 OID 16577)
-- Name: Passagem_Cliente_venda Passagem_Cliente_venda_id_Cliente_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Passagem_Cliente_venda"
    ADD CONSTRAINT "Passagem_Cliente_venda_id_Cliente_fkey" FOREIGN KEY ("id_Cliente") REFERENCES public.cliente(id) NOT VALID;


--
-- TOC entry 2873 (class 2606 OID 16582)
-- Name: Passagem_Cliente_venda Passagem_Cliente_venda_id_Passagem_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Passagem_Cliente_venda"
    ADD CONSTRAINT "Passagem_Cliente_venda_id_Passagem_fkey" FOREIGN KEY ("id_Passagem") REFERENCES public.passagem(id) NOT VALID;


-- Completed on 2022-02-07 22:18:54

--
-- PostgreSQL database dump complete
--

