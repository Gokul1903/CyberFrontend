'use client';
import CreateJob from './CreateJob';

import Navbar from './Navbar';
import {
  Box,
  Divider,
  Flex,
  Text,
  RangeSlider,
  TextInput,
} from '@mantine/core';
import {
  IconMapPin,
  IconChevronDown,
  IconSearch,
} from '@tabler/icons-react';
import { IconUser } from '@tabler/icons-react';
import { useState } from 'react';

export default function JobFilterHeader() {
  const [salaryRange, setSalaryRange] = useState<[number, number]>([50000, 80000]);
  const [showModal, setShowModal] = useState(false);
  return (
    <Box w="100%" bg="#FFFFFF">
      <Navbar onCreateJobClick={() => setShowModal(true)}/>

      <Box
        px="xl"
        py="lg"
        style={{
          boxShadow: '0px 0px 20px rgba(127, 127, 127, 0.15)',
          backgroundColor: '#FFFFFF',
          minHeight: '29vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <Flex
          justify="space-between"
          align="center"
          wrap="wrap"
          gap="md"
          direction={{ base: 'column', sm: 'row' }}
        >
          {/* Search Field */}
          <Flex align="center" gap="xs" w={{ base: '100%', sm: 'auto' }}>
            <IconSearch size={25} color="#686868" style={{marginLeft:"40px"}}/>
            <TextInput
              placeholder="Search By Job Title, Role"
              w="100%"
              size="xs"
              styles={{
                input: {
                  fontSize: '17px',
                  color: '#686868',
                  border: 'none',
                  '::placeholder': {
                    color: '#000000',
                    opacity: 1,
                  },
                },
              }}
            />
          </Flex>

          <Divider
            orientation="vertical"
            size="sm"
            color="#EAEAEA"
            display={{ base: 'none', sm: 'block' }}
          />

          {/* Preferred Location */}
          <Flex align="center" gap="xs" w={{ base: '100%', sm: 'auto' }}>
  <IconMapPin size={27} color="#686868" />
  <Flex align="center">
    <Text size="md" c="#686868" fw={500} style={{marginRight:"70px"}}>
      Preferred Location
    </Text>
    <IconChevronDown size={16} color="#686868" style={{marginLeft:"70px"}} />
  </Flex>
</Flex>



          <Divider
            orientation="vertical"
            size="sm"
            color="#EAEAEA"
            display={{ base: 'none', sm: 'block' }}
          />

          {/* Job Type */}
          <Flex align="center" gap="xs" w={{ base: '100%', sm: 'auto' }}>
            <IconUser size={25} color="#686868" />
            <Text size="md" c="#686868" fw={500} style={{marginRight:"70px"}}>
              Job Type
            </Text>
            <IconChevronDown size={16} color="#686868" style={{marginLeft:"70px"}} />
          </Flex>

          <Divider
            orientation="vertical"
            size="sm"
            color="#EAEAEA"
            display={{ base: 'none', sm: 'block' }}
          />

          {/* Salary Range */}
          <Box w={{ base: '100%', sm: 300 }} style={{marginRight:"40px"}}>
            <Flex align="center" justify="space-between" mb={10}>
              <Text size="md" c="#000000" fw={500}>
                Salary Per Month
              </Text>
              <Text size="md" c="#000000" fw={500}>
                ₹{salaryRange[0] / 1000}k - ₹{salaryRange[1] / 1000}k
              </Text>
            </Flex>

            <RangeSlider
              min={50000}
              max={100000}
              step={5000}
              value={salaryRange}
              onChange={setSalaryRange}
              size="md"
              label={null}
              styles={{
                track: {
                  backgroundColor: '#000000',
                  height: '2px',
                  width: '100%',
                },
                bar: {
                  backgroundColor: '#000000',
                },
                thumb: {
                  backgroundColor: '#FFFFFF',
                  border: '5px solid #000000',
                  width: 16,
                  height: 16,
                },
              }}
            />
          </Box >
        </Flex>
      </Box>
      {showModal && <CreateJob isOpen={showModal} onClose={() => setShowModal(false)} />}
    </Box>
  );
}
