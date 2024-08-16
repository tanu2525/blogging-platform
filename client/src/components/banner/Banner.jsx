
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background-color: red;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-size: cover;
   
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: white;
    line-height: 1
`;


const Banner = () => {
    
    return (
        <Image>
            <Heading>BLOGGING WEBSITE</Heading>
         
        </Image>
    )
}

export default Banner;