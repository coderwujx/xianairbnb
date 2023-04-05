const theme = {
  color: {
    primaryColor: "#ff385c",
    seconddaryColor: "#00848A"
  },
  textColor: {
    primaryColor: "#484848",
    seconddaryColor: "#222"
  },
  mixins: {
    boxShadow: `
      transition: box-shadow 200ms ease;
      &:hover{
        box-shadow: 0 2px 4px rgba(0, 0, 0, .18);
      }
    `
  }
}

export default theme