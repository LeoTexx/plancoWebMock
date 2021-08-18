import React from "react";
import styled from "styled-components";
import GroupesImage from "../assets/images/groupes.png";
import OfferImage from "../assets/images/offers.png";
import SeekImage from "../assets/images/seek.png";
import PurchaseImage from "../assets/images/purchases.png";

const Container = styled.div`
  background-color: #fff;
  min-width: 330px;
  height: 92px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
`;
const Image = styled.img`
  align-items: center;
  justify-content: center;
  height: 70px;
`;

const Categorie = styled.section`
  margin-bottom: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FieldTitle = styled.p`
  font-size: 10px;
  font-family: Roboto, sans-serif;
  color: #8e8e93;
`;

export default function Categories() {
  return (
    <Container>
      <Categorie>
        <Image src={GroupesImage} alt="groupes" />
        <FieldTitle> Gruppen</FieldTitle>
      </Categorie>{" "}
      <Categorie>
        <Image src={OfferImage} alt="offer" />
        <FieldTitle>Angebote</FieldTitle>
      </Categorie>
      <Categorie>
        <Image src={SeekImage} alt="seek" />
        <FieldTitle>Suche</FieldTitle>
      </Categorie>
      <Categorie>
        <Image src={PurchaseImage} alt="purchases" />
        <FieldTitle>Einkäufe</FieldTitle>
      </Categorie>
    </Container>
  );
}
