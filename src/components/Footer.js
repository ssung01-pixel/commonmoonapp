import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "#301C51", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        CommonMoon App
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Quick Links</Heading>
            <FooterLink href="#">Shop</FooterLink>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
            <FooterLink href="#">Refund policy</FooterLink>
          </Column>
          <Column>
            <Heading>Legal </Heading>
            <p>Common Moon is a subgroup of Project Break The Cycle, 
              a registered 501(c)3 nonprofit organization in the United States.</p>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "40px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "40px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "40px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "40px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;