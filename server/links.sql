CREATE TABLE street_table (
  id int PRIMARY KEY AUTO_INCREMENT,
  name_street_new varchar(40),
  name_street_old varchar(40),
  comment varchar(2000)
)
CHARACTER SET = utf8;



INSERT INTO street_table (name_street_new, comment)
VALUES('Московская', 'Печерский район, метро Арсенальная');

CREATE TABLE bilding_table (
  id int PRIMARY KEY AUTO_INCREMENT,
  name_street_id int REFERENCES street_table(id),
  bilding_namber int,
  lat float,
  lng float,
  comment varchar(2000),
  foto_url varchar(1000)
)
CHARACTER SET = utf8;

INSERT INTO street_table (name_street_new, comment)
VALUES('Предславинская', 'Метро "Палац Украина"');

CREATE TABLE place_table (
  id int PRIMARY KEY AUTO_INCREMENT,
  bilding_table_id int REFERENCES bilding_table(id),
  description_of_place varchar(1000),
  comment varchar(3000),
  foto_url varchar(1000)
)
CHARACTER SET = utf8;

CREATE TABLE switches_table (
  id int PRIMARY KEY AUTO_INCREMENT,
  place_table_id int REFERENCES place_table(id),
  alias varchar(100),
  ip_of_switch varchar(100),
  comment varchar(3000),
  foto_url varchar(1000),
  namber_of_ports int
)
CHARACTER SET = utf8;

CREATE TABLE ports_of_switch_table (
  id int PRIMARY KEY AUTO_INCREMENT,
  dates TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  switches_table_id int REFERENCES switches_table(id),
  namber_of_port int,
  comment varchar(3000)
)
CHARACTER SET = utf8;

CREATE TABLE type_of_connection_table (
  id int PRIMARY KEY AUTO_INCREMENT,
  type_of_connection varchar(1000),
  comment varchar(3000)

)
CHARACTER SET = utf8;

CREATE TABLE connection_table (
  id int PRIMARY KEY AUTO_INCREMENT,
  dates TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  place_table_id_1 int REFERENCES place_table(id),
  place_table_id_2 int REFERENCES place_table(id),
  type_of_connection_table_id int REFERENCES type_of_connection_table(id),
  abonent_teble_id int REFERENCES abonent_teble(id),
  comment varchar(3000)
)
CHARACTER SET = utf8;

CREATE TABLE abonent_table (
  id int PRIMARY KEY AUTO_INCREMENT,
  dates TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ports_of_switch_table_id int REFERENCES ports_of_switch_table(id),
  place_table_id int REFERENCES place_table(id),
  comment varchar(3000)
)
CHARACTER SET = utf8;