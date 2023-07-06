import React from 'react';
import { Container, Image, Stack, Text } from '@chakra-ui/react';
import { Box, Heading } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  tranform: 'translate(-50% , -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text letterSpacing={'wides'} lineHeight={'190%'} p={['4', '16']}>
           VideoHub is your ultimate destination for all things video content. Whether you're a movie buff, a TV show fanatic, or a fan of online videos, we've got you covered.

With an extensive collection of movies, TV shows, documentaries, and user-generated content, VideoHub offers a vast library of entertainment options to suit every taste and interest. Our platform is designed to provide you with seamless access to a wide range of videos, allowing you to explore, discover, and indulge in your favorite content.

Experience the convenience of our user-friendly interface, which enables effortless navigation and browsing through various genres, categories, and trending videos. Whether you're in the mood for action-packed blockbusters, heartwarming dramas, side-splitting comedies, or thought-provoking documentaries, VideoHub has it all.

Not only do we curate and provide access to a diverse selection of videos, but we also prioritize the user experience. Our platform allows you to create personalized playlists, bookmark your favorite videos, and receive tailored recommendations based on your viewing history and preferences.

Join our thriving community of video enthusiasts, where you can engage in discussions, share your thoughts, and discover hidden gems recommended by fellow users. Connect with like-minded individuals, expand your cinematic horizons, and never miss out on the latest buzz in the world of video entertainment.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Night life is Cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
