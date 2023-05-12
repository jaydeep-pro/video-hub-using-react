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
            Lorem ipsum dolor, sit aet consectetur adipisicing elit. Quam
            dolores quidem suscipit ipsum vel harum doloremque nesciunt unde
            quos quo, impedit praesentium ipsa corporis voluptate minima
            quibusdam repellat inventore ut minus iste itaque aliquam nisi iusto
            fugiat. Maiores, culpa, hic officiis maxime velit dolorem
            voluptatibus numquam adipisci est id similique quidem voluptatum
            reiciendis odit et fugiat facilis cumque exercitationem optio magni
            aperiam dolor iste deleniti illo. Perspiciatis, sapiente,
            reprehenderit mollitia dolore ipsa iure ab necessitatibus iste amet
            ea pariatur facere cupiditate exercitationem quis tempora aliquid
            sed itaque. Aspernatur maxime quisquam tempore commodi modi
            assumenda? Aliquam, sapiente recusandae. Iusto cum tempora quidem
            ipsum. Magni quibusdam cum voluptatem minima reiciendis sapiente
            eaque labore corrupti est necessitatibus molestias consequatur optio
            dicta, quia illo voluptates aperiam accusamus mollitia repellat
            debitis rerum doloribus magnam hic! Sequi amet pariatur sunt culpa!
            Sint, cum ullam!
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
