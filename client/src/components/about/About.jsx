import { Box, styled, Typography } from '@mui/material';


const Banner = styled(Box)`
    background-image: url(https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600);
    width: 100%;
    height: 50vh;
    background-size: cover;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TextOverlay = styled(Box)`
    position: absolute;
    color: white;
    text-align: center;
    background: rgba(0, 0, 0, 0.6); /* Semi-transparent background */
    padding: 20px;
    border-radius: 10px;
`;




const About = () => {
    return (
        <Box>
            <Banner>
                <TextOverlay>
                    <Typography variant="h3">About Me</Typography>
                    <Typography variant="h5">
                        I am currently a second-semester BCA student with a strong passion for web development. I am actively working on a project to create a dynamic and user-friendly blogging website. My focus is on honing my skills in coding, design, and project management, as I work towards becoming a proficient developer.
                    </Typography>
                </TextOverlay>
            </Banner>
           
        </Box>
    )
}

export default About;
