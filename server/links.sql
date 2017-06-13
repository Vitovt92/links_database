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