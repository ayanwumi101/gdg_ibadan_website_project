'use client'
import { Heading, Box, Text, Flex, Avatar, Menu, MenuButton, MenuItem, MenuList, Stack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import logo from '../../assets/gdg-logo.svg'
import { ChevronDownIcon } from '@chakra-ui/icons'

const Navbar = () => {
  return (
    <Box boxShadow='sm' py='5'>
    <Box w='90%' mx='auto'>
      <Flex alignItems='center' justifyContent='space-between'>
        <Box><Image src={logo} /></Box>

        <Box>
          <Stack direction='row' spacing={7} fontWeight='medium' color='#1E3747'>
            <Menu isLazy color='#1E3747'>
              <MenuButton fontWeight='medium'>GDG Ibadan <ChevronDownIcon /></MenuButton>
              <MenuList>
                <MenuItem as='a' href='#'>About GDG Ibadan</MenuItem>
                <MenuItem>Job Board</MenuItem>
              </MenuList>
            </Menu>
            <Text>Events</Text>
            <Text>Blog</Text>
          </Stack>
        </Box>

        <Box>
          <Flex alignItems='center' gap={2}>
            <Avatar size='sm' name='Oluwafolayemi Anifowose' />
            <Menu isLazy color='#1E3747'>
              <MenuButton color='#1E3747' fontWeight='medium'> Oluwafolayemi Anifowose <ChevronDownIcon /></MenuButton>
              <MenuList>
                <MenuItem>Edit Profile</MenuItem>
                <MenuItem>Favourites</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
            <Text ></Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
    </Box>
  );
}

export default Navbar