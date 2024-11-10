import { style } from "@vanilla-extract/css";

const container = style({
  display: "flex",
  padding: "1rem",
  flexDirection: "column",
});

const box = style({
  textAlign: "center",
});

const bottomBtn = style({
  width: "100%",
  padding: "12px",
});

const bottomBtnThx = style({
  position: "fixed",
  zIndex: 2,
  width: "100%",
  padding: "12px",
  bottom: 0,
});

const productsTitle = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  marginBottom: "0.5rem",
});

const products = style({
  display: "flex",
  gap: "1rem",
});

const product = style({
  backgroundColor: "#F2F3F5",
  borderRadius: "1rem",
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  gap: "0.2rem",
});

const productTitle = style({
  lineHeight: "24px",
  fontSize: "17px",
  marginBottom: "0.3rem",
});

const bonus = style({
  flex: 1,
});

const gifts = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
});

const gift = style({
  border: "2px solid gray",
  borderRadius: "1rem",
  borderColor: "#F2F3F5",
  padding: "0.5rem",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
  flexBasis: "30%",
  minHeight: "4rem",
  cursor: "pointer",
  position: "relative",
});

const checkMark = style({
  position: "absolute",
  right: -3,
  top: -9,
});

const benefits = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

const plans = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

const plan = style({
  border: "2px solid #F2F3F5",
  borderRadius: "1rem",
  boxSizing: "border-box",
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "0.5rem",
  cursor: "pointer",
  position: "relative",
});

const benefit = style({
  backgroundColor: "#F2F3F5",
  borderRadius: "1rem",
  boxSizing: "border-box",
  padding: "1rem 1rem 0 1rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

const reminder = style({
  boxSizing: "border-box",
  padding: "0.8rem",
  backgroundColor: "#F2F3F5",
  borderRadius: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const best = style({
  boxSizing: "border-box",
  padding: "1rem",
  border: "2px solid gray",
  borderRadius: "1rem",
  borderColor: "#F2F3F5",
  position: "relative",
});

const optionsContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const options = style({
  display: "flex",
  alignItems: "center",
  padding: "0.5rem",
  boxSizing: "border-box",
  backgroundColor: "#F2F3F5",
  borderRadius: "0.5rem",
  gap: "0.5rem",
  cursor: "pointer",
});

export const appSt = {
  bottomBtn,
  bottomBtnThx,
  container,
  box,
  productsTitle,
  products,
  productTitle,
  product,
  bonus,
  gifts,
  gift,
  checkMark,
  benefits,
  benefit,
  plans,
  plan,
  reminder,
  best,
  optionsContainer,
  options,
};
