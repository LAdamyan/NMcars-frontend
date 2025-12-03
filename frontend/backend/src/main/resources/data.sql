CREATE TABLE SERVICE_OFFER (
                               ID BIGINT AUTO_INCREMENT PRIMARY KEY,
                               NAME VARCHAR(255),
                               DESCRIPTION VARCHAR(1000),
                               ADDRESS VARCHAR(255),
                               PRICE DOUBLE
);

INSERT INTO SERVICE_OFFER(NAME, DESCRIPTION, ADDRESS, PRICE)
VALUES('Oil change','Full synthetic oil and filter','Main Street 12, Amsterdam',59.99);

INSERT INTO SERVICE_OFFER(NAME, DESCRIPTION, ADDRESS, PRICE)
VALUES('Brake check','Brake pads inspection and replacement','Stationstraat 3, Utrecht',129.50);

INSERT INTO SERVICE_OFFER(NAME, DESCRIPTION, ADDRESS, PRICE)
VALUES('Tire change','Summer to winter tire swap','Main Street 12, Amsterdam',39.00);

INSERT INTO SERVICE_OFFER(NAME, DESCRIPTION, ADDRESS, PRICE)
VALUES('Diagnostics','Engine diagnostics (OBD-II)','Highway Ave 5, Rotterdam',79.00);
