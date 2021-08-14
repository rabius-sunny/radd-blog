import { Card, styled } from "@material-ui/core";

const RootContainer = styled('div')({
    maxWidth: '1176px',
    margin: '0 auto'
})
const DesktopCard = styled(Card)({
    '@media (max-width: 599px)': {
        display: 'none'
    },
    maxWidth: 345,
    margin: '15px auto',
    boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.3)'
})
const MobileCard = styled(Card)({
    '@media (min-width: 600px)': {
        display: 'none'
    },
    boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.3)'
})


export { RootContainer, DesktopCard, MobileCard }