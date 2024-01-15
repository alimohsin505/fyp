import React, { useState } from 'react';
import Image from 'next/image';
import {
  BarChartOutlined,
  CloudOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Typography, Flex, List, Button } from 'antd';

import styles from './video.module.css';


const { Header, Content, Footer, Sider } = Layout;
const { Text, Title, Paragraph } = Typography;

const data = [
  "Project Detail",
  "Project Video",
  "Hardware",
  "Applications",
  "Highlights"
]

const proposedSolutionData = [
  "Obtain MPPT via Boost Converter",
  "Simple DC- DC LLC Resonant Converter for Regulation",
  "5 Level Diode Clamped Main Inverter",
  "Phase Lock Loop and Grid Synchronization"
]

const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: data[index],
}));

const App = () => {
  const [selectedItem, setSelectedItem] = useState(data[0]);

  const handleMenuClick = (e) => {
    console.log("e", data[parseInt(e.key) - 1]);
    setSelectedItem(data[parseInt(e.key) - 1]);
  };

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div style={{ textAlign: 'center'}}>
          <Title level={4} style={{ color: 'white'}}>Final year Project</Title>

        </div>
        <Menu onClick={handleMenuClick} theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} />
      </Sider>
      <Layout
        style={{
          marginLeft: 200,
        }}
      >
        <Header
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: 'center',
            }}
          >
            {selectedItem === data[0] && <ProjectDetail />}
            {selectedItem === data[1] && <VideoComponenet />}
            {selectedItem === data[2] && <HardwareComponent />}
            {selectedItem === data[3] && <ApplicationsComponent />}
            {selectedItem === data[4] && <HighlightsComponent />}

          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          ©{new Date().getFullYear()} Created by<Button type="link" href="https://github.com/talhamasood0000">Talha Masood</Button>
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;


const ProjectDetail = () => (
  <>
  <div>
    {/* FYP Intro */}
    <div>
          <Title>Three Phase Grid Tie Solar Inverter with Resonant Converter</Title>
          <Title level={2}>Project Advisor: Mr. Arsalan A Rahim </Title>
          <Text>Department of Electrical Engineering, University of Engineering and Technology, Lahore</Text>
    </div>
    {/* Team Intro */}
    <div>
      <Title>Team Introduction</Title>
      <div>
        <Flex gap="middle" vertical style={{ alignItems: 'center'}}>
          <Flex gap="middle" horizontal>
            <Flex gap="middle" vertical>
              <Title level={4}>Hamza Bin Abdullah</Title>
              <Text>2018-EE-172</Text>
              <Text>Specialization: Power</Text>
            </Flex>
            <Flex gap="middle" vertical>
              <Title level={4}>Arham Ashfaq</Title>
              <Text>2018-EE-167</Text>
              <Text>Specialization: Power / Computer</Text>
            </Flex>
          </Flex>

          <Flex gap="middle" horizontal>
          <Flex gap="middle" vertical>
              <Title level={4}>Muhammad Ali Mohsin</Title>
              <Text>2018-EE-069</Text>
              <Text>Specialization: Power</Text>
            </Flex>
            
            <Flex gap="middle" vertical>
              <Title level={4}>Ali Tariq</Title>
              <Text>2018-EE-189</Text>
              <Text>Specialization: Computer</Text>
            </Flex>
          </Flex>
        </Flex>
      </div>
    </div>
    {/* Problem Statement */}
    <div>
      <Title>Problem Statement</Title>
      <Paragraph style={{ paddingRight: '20rem', paddingLeft: '20rem'}}>
        Main problem under consideration is the growing energy
        demand of world and the efforts under way to solve them
        by manufacturing a Three Phase Grid Tie Solar
        Inverter. Inverter then itself has several problems which
        are to be dealt with. Few of them are as the run-time
        monitoring, analysis and variation of output amplitude,
        frequency and phase, along with the implementation of a
        resonant converter
      </Paragraph>
      <Paragraph style={{ paddingRight: '20rem', paddingLeft: '20rem'}}>
        Another problem to be dealt with is that the art is just not
        to make an inverter. The art here lies in the process of
        making it smaller and more efficient at the same time by
        reducing the internal losses and controlling different
        parameters at the same time.
      </Paragraph>
    </div>
    {/* Proposed Solution */}
    <div         
      style={{
        paddingRight: "20rem",
        paddingLeft: "20rem"
      }}>
      <Title>Proposed Solution</Title>
      <List
        size="small"
        bordered
        dataSource={proposedSolutionData}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
    </div>
    {/* Block Diagram */}
    <div>
      <Title>Block Diagram</Title>
      <div>
        <Image
          src="block-diagram.png" 
          alt="Description of the image"
          width={500} 
          height={500}
        />
      </div>
    </div>
  </div>
    
  </>
);


const VideoComponenet = () => (
  <>
    <Title>FYP Video</Title>
    <div className={styles.videoContainer}>
      <iframe src="https://drive.google.com/file/d/1rnUp7WrYTE1N0c8cU1ZnjxLtmLxDJ1Tp/preview" width="640" height="480" allow="autoplay"></iframe>
    </div>
  </>

);


const HighlightsComponent = () => (
  <>
    <div>
      <Title>Entrepreneurial Company Sponsored Projects</Title>
      <Button type="link" href="https://www.zisolar.com.pk">Zi Solar</Button>
    </div>
  </>
)


const ApplicationsComponent = () => (
  <>
    <div>
      <Title>Applications</Title>
      <Paragraph style={{ paddingRight: '20rem', paddingLeft: '20rem'}}>
        Large scale industry owners who do not want a delay in
        the export shipment orders due to the load shedding.
        Small scale industry composed of individual users will be
        saved form the high electricity unit cost which is set by
        the government. Moreover, they also get the financial
        benefit of pumping the power into national grid. Secondly,
        government is an important stakeholder here as they can
        simply purchase the electricity without any hassle of
        purchasing the land for dam construction or importing
        expensive furnace oil for thermal power plants. Undergraduate Final
      </Paragraph>
    </div>
  </>
);


const HardwareComponent = ( ) => (
  <>
    <div style={{ paddingRight: '20rem', paddingLeft: '20rem'}}>
      <Title>Hardware</Title>
      <Flex gap="middle" vertical>
        <Image
          src="h1.png"
          alt="Image description"
          width={500} 
          height={500}
        />
        <Image
          src="h2.png"
          alt="Image description"
          width={500} 
          height={500}
        />
        <Image
          src="h3.png"
          alt="Image description"
          width={500} 
          height={500}
        />
        <Image
          src="h4.png"
          alt="Image description"
          width={500} 
          height={500}
        />
        <Image
          src="h5.png"
          alt="Image description"
          width={500} 
          height={500}
        />
        <Image
          src="h6.png"
          alt="Image description"
          width={500} 
          height={500}
        />
        <Image
          src="h7.png"
          alt="Image description"
          width={500} 
          height={500}
        />
        <Image
          src="h8.png"
          alt="Image description"
          width={500} 
          height={500}
        />
        <Image
          src="h9.png"
          alt="Image description"
          width={500} 
          height={500}
        />
      </Flex>
    </div>
  </>
);

