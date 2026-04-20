import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  Button,
  Image,
  VStack,
  HStack,
  Icon,
  Separator,
} from "@chakra-ui/react"
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion"
import { LuPhone, LuMail, LuMapPin, LuClock, LuHouse } from "react-icons/lu"

const OLIVE = "#6B7A4E"
const OLIVE_DARK = "#4F5C37"
const OLIVE_LIGHT = "#8A9A65"
const CREAM = "#F5EFE3"
const CREAM_DARK = "#EDE4D3"
const TEXT_DARK = "#2A2420"
const TEXT_MID = "#5A5450"

function Logo({ light = false }: { light?: boolean }) {
  return (
    <HStack gap="2" align="center">
      <Box
        w="8"
        h="8"
        bg={light ? "whiteAlpha.200" : OLIVE}
        rounded="sm"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexShrink={0}
      >
        <Icon color="white" fontSize="md">
          <LuHouse />
        </Icon>
      </Box>
      <VStack gap="0" align="start">
        <Text
          fontSize="2xs"
          fontWeight="bold"
          letterSpacing="wider"
          color={light ? OLIVE_LIGHT : OLIVE_DARK}
          lineHeight="1"
          textTransform="uppercase"
        >
          The
        </Text>
        <Text
          fontSize="xs"
          fontWeight="black"
          letterSpacing="wider"
          color={light ? "white" : TEXT_DARK}
          lineHeight="1"
          textTransform="uppercase"
        >
          Teacher
        </Text>
        <Text
          fontSize="2xs"
          fontWeight="semibold"
          letterSpacing="widest"
          color={light ? "gray.400" : TEXT_MID}
          lineHeight="1"
          textTransform="uppercase"
        >
          Neighbor
        </Text>
      </VStack>
    </HStack>
  )
}

function HeroSection() {
  return (
    <Box bg={CREAM} overflow="hidden">
      <Flex direction={{ base: "column", md: "row" }} align="stretch" minH={{ md: "85vh" }}>
        <Box
          flex="1"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          px={{ base: "6", md: "12", lg: "20" }}
          py={{ base: "12", md: "20" }}
        >
          <Box mb="4">
            <Logo />
          </Box>
          <Separator my="5" borderColor={OLIVE_LIGHT} w="16" css={{ borderWidth: "2px" }} />
          <Heading
            as="h1"
            fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}
            fontWeight="black"
            lineHeight="0.95"
            color={TEXT_DARK}
            textTransform="uppercase"
            letterSpacing="tight"
            mb="6"
          >
            <Text
              as="span"
              display="block"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontStyle="italic"
              fontWeight="light"
              textTransform="none"
              letterSpacing="normal"
              color={OLIVE}
              mb="1"
            >
              THE
            </Text>
            Teacher
            <Text
              as="span"
              display="block"
              color={OLIVE}
              fontStyle="italic"
              textTransform="none"
            >
              Neighbor
            </Text>
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }} color={TEXT_MID} maxW="sm" mb="8" lineHeight="tall">
            We educate, guide, and support our clients like a trusted neighbor,
            providing resources to help them feel confident every step of the way.
          </Text>
          <Box>
            <Button
              bg={OLIVE}
              color="white"
              size="lg"
              px="8"
              rounded="sm"
              fontWeight="semibold"
              fontSize="sm"
              letterSpacing="wide"
              _hover={{ bg: OLIVE_DARK }}
            >
              Sign up for more information
            </Button>
          </Box>
        </Box>
        <Box
          flex={{ base: "none", md: "1" }}
          h={{ base: "64", md: "auto" }}
          overflow="hidden"
        >
          <Image
            src="/hero-house.webp"
            alt="Beautiful home"
            w="full"
            h="full"
            objectFit="cover"
          />
        </Box>
      </Flex>
    </Box>
  )
}

function ProgramIntroSection() {
  return (
    <Box bg={OLIVE} py={{ base: "16", md: "20" }}>
      <Container maxW="4xl" textAlign="center">
        <Text
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          fontStyle="italic"
          color="white"
          lineHeight="tall"
          fontWeight="light"
        >
          The{" "}
          <Text as="span" fontWeight="bold" fontStyle="italic">
            Teacher Neighbor
          </Text>{" "}
          program is an initiative created to help teachers and school staff
          learn about and access the homebuying resources available to them.
        </Text>
      </Container>
    </Box>
  )
}

function AgentCard({
  name,
  title,
  phone,
  email,
}: {
  name: string
  title: string
  phone: string
  email: string
}) {
  return (
    <Box
      bg="white"
      border="1px solid"
      borderColor={CREAM_DARK}
      p="5"
      rounded="sm"
      shadow="sm"
      flex="1"
    >
      <Box
        w="10"
        h="10"
        bg={CREAM_DARK}
        rounded="full"
        mb="3"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Icon color={OLIVE} fontSize="lg">
          <LuHouse />
        </Icon>
      </Box>
      <Text fontWeight="bold" fontSize="sm" color={TEXT_DARK} mb="0.5">
        {name}
      </Text>
      <Text
        fontSize="2xs"
        color={OLIVE}
        fontWeight="semibold"
        textTransform="uppercase"
        letterSpacing="wider"
        mb="3"
      >
        {title}
      </Text>
      <Separator mb="3" borderColor={CREAM_DARK} />
      <VStack gap="1.5" align="start">
        <HStack gap="2">
          <Icon color={OLIVE} fontSize="xs">
            <LuPhone />
          </Icon>
          <Text fontSize="xs" color={TEXT_MID}>
            {phone}
          </Text>
        </HStack>
        <HStack gap="2">
          <Icon color={OLIVE} fontSize="xs">
            <LuMail />
          </Icon>
          <Text fontSize="xs" color={TEXT_MID} wordBreak="break-all">
            {email}
          </Text>
        </HStack>
      </VStack>
    </Box>
  )
}

function MeetUsSection() {
  return (
    <Box bg={CREAM} py={{ base: "16", md: "24" }}>
      <Container maxW="6xl">
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="12" alignItems="start">
          <Box>
            <Image
              src="/meet-us-interior.webp"
              alt="Beautiful home interior"
              w="full"
              h={{ base: "64", md: "500px" }}
              objectFit="cover"
              rounded="sm"
              shadow="lg"
            />
          </Box>
          <VStack align="start" gap="5" pt={{ md: "4" }}>
            <Box>
              <Text
                fontSize="xs"
                textTransform="uppercase"
                letterSpacing="widest"
                color={OLIVE}
                fontWeight="semibold"
                mb="2"
              >
                Our Team
              </Text>
              <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="black" color={TEXT_DARK}>
                Meet Us
              </Heading>
              <Box w="12" h="0.5" bg={OLIVE} mt="3" />
            </Box>
            <Text fontSize="sm" color={TEXT_MID} lineHeight="tall">
              We are a dedicated team of local Realtors® apart of the Cobb Board of Realtors
              Association with a combined 15 years of experience serving individuals in the
              Metro Atlanta real estate market.
            </Text>
            <Text fontSize="sm" color={TEXT_MID} lineHeight="tall">
              Together, we've successfully closed over 200+ transactions, empowering buyers,
              sellers, and investors.
            </Text>
            <Text fontSize="sm" color={TEXT_MID} lineHeight="tall">
              Through our Teacher Neighbor initiative, we go beyond real estate: we educate,
              guide, and support our clients like a trusted neighbor, providing resources to
              help them feel confident every step of the way.
            </Text>
            <Flex gap="4" w="full" direction={{ base: "column", sm: "row" }}>
              <AgentCard
                name="Cymone Jones"
                title="Realtor"
                phone="(770) 555-0182"
                email="Teamcymone@gmail.com"
              />
              <AgentCard
                name="Jay Diaz"
                title="Realtor"
                phone="(770) 555-0165"
                email="Teamjaydiaz@gmail.com"
              />
            </Flex>
          </VStack>
        </Grid>
      </Container>
    </Box>
  )
}

function WhatIsSection() {
  return (
    <Box bg="white" py={{ base: "16", md: "24" }}>
      <Container maxW="6xl">
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="black"
          color={TEXT_DARK}
          mb="10"
          textAlign="center"
        >
          What is The Teacher{" "}
          <Text as="span" fontStyle="italic" color={OLIVE}>
            Neighbor
          </Text>
          ?
        </Heading>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="12" alignItems="center">
          <VStack align="start" gap="5">
            <Text fontSize="sm" color={TEXT_MID} lineHeight="tall">
              The Teacher Neighbor program is an initiative created to help teachers and school
              staff learn about and access the homebuying resources available to them. It
              connects educators with grants, down payment assistance, lower-interest loan
              options, and trusted guidance so they can confidently move toward homeownership.
            </Text>
            <Text fontSize="sm" color={TEXT_MID} lineHeight="tall">
              The goal is to make the process easier, cleaner, and more affordable for the
              people who serve our community every day.
            </Text>
            <Box
              bg={CREAM}
              borderLeft="4px solid"
              borderColor={OLIVE}
              p="5"
              rounded="sm"
              w="full"
            >
              <Text fontSize="sm" color={TEXT_DARK} fontWeight="medium" lineHeight="tall" fontStyle="italic">
                "Our mission is to bridge that gap by providing clear guidance, trusted
                support, and a smoother, more achievable path to homeownership."
              </Text>
            </Box>
          </VStack>
          <Box>
            <Image
              src="/what-is-collage.webp"
              alt="Teacher Neighbor homes"
              w="full"
              h={{ base: "64", md: "420px" }}
              objectFit="cover"
              rounded="sm"
              shadow="lg"
            />
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}

function CommunityBenefitSection() {
  const benefits = [
    {
      img: "/community-benefit-1.webp",
      title: "Grants & Down Payment Assistance",
      desc: "Connecting educators with financial programs that reduce upfront costs.",
    },
    {
      img: "/community-benefit-2.webp",
      title: "Lower Interest Loan Options",
      desc: "Access to special mortgage programs designed for community heroes.",
    },
    {
      img: "/community-benefit-3.webp",
      title: "Trusted Guidance",
      desc: "Step-by-step support through every phase of the homebuying process.",
    },
  ]

  return (
    <Box bg={CREAM} py={{ base: "16", md: "24" }}>
      <Container maxW="6xl">
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="black"
          color={TEXT_DARK}
          mb="6"
          maxW="2xl"
        >
          How Does The Teacher Neighbor Initiative Benefit The Community?
        </Heading>
        <Text fontSize="sm" color={TEXT_MID} lineHeight="tall" mb="4" maxW="3xl">
          This program helps educators combine grants, down payment assistance, and other
          available resources to make homeownership more accessible.
        </Text>
        <Text fontSize="sm" color={TEXT_MID} lineHeight="tall" mb="4" maxW="3xl">
          Many teachers simply aren't aware of grants and resources available to them and
          therefore the homebuying process can feel overwhelming — especially with barriers
          like{" "}
          <Text as="span" fontWeight="semibold" color={TEXT_DARK}>
            down payments, credit challenges,
          </Text>{" "}
          and{" "}
          <Text as="span" fontWeight="semibold" color={TEXT_DARK}>
            rising home prices.
          </Text>
        </Text>
        <Text fontSize="sm" color={TEXT_MID} lineHeight="tall" mb="10" maxW="3xl">
          <Text as="span" fontWeight="bold" color={TEXT_DARK}>
            Our mission
          </Text>{" "}
          is to bridge that gap by providing clear guidance, trusted support, and a smoother,
          more achievable path to homeownership.
        </Text>
        <Grid templateColumns={{ base: "1fr", sm: "repeat(3, 1fr)" }} gap="6">
          {benefits.map((b) => (
            <Box
              key={b.title}
              bg="white"
              rounded="sm"
              overflow="hidden"
              shadow="sm"
              border="1px solid"
              borderColor={CREAM_DARK}
            >
              <Image src={b.img} alt={b.title} w="full" h="48" objectFit="cover" />
              <Box p="5">
                <Text fontWeight="bold" fontSize="sm" color={TEXT_DARK} mb="2">
                  {b.title}
                </Text>
                <Text fontSize="xs" color={TEXT_MID} lineHeight="tall">
                  {b.desc}
                </Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

function ProfessionCard({ img, label }: { img: string; label: string }) {
  return (
    <VStack gap="3" align="center">
      <Box
        w={{ base: "28", md: "32" }}
        h={{ base: "28", md: "32" }}
        rounded="full"
        overflow="hidden"
        border="3px solid"
        borderColor={CREAM_DARK}
        shadow="md"
        flexShrink={0}
      >
        <Image src={img} alt={label} w="full" h="full" objectFit="cover" />
      </Box>
      <Text
        fontSize="xs"
        fontWeight="semibold"
        color={TEXT_DARK}
        textAlign="center"
        maxW="36"
        lineHeight="short"
      >
        {label}
      </Text>
    </VStack>
  )
}

function WhoIsItForSection() {
  const professions = [
    { img: "/profession-teacher.webp", label: "Teachers" },
    { img: "/profession-school-staff.webp", label: "Noninstructional School Staff" },
    { img: "/profession-police.webp", label: "Police/Law Enforcement" },
    { img: "/profession-nurse.webp", label: "Nurses/Health care Workers" },
    { img: "/profession-firefighter.webp", label: "Firefighters/EMTs" },
    { img: "/profession-military.webp", label: "Military" },
    { img: "/profession-government.webp", label: "Government Employees" },
    { img: "/profession-veteran.webp", label: "Active Duty & Veterans" },
  ]

  return (
    <Box bg="white" py={{ base: "16", md: "24" }}>
      <Container maxW="6xl">
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="black"
          color={TEXT_DARK}
          textAlign="center"
          mb="14"
        >
          Who is The Teacher Neighbor{" "}
          <Text as="span" fontStyle="italic" color={OLIVE}>
            initiative
          </Text>{" "}
          for?
        </Heading>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" }}
          gap={{ base: "8", md: "10" }}
          justifyItems="center"
        >
          {professions.map((p) => (
            <ProfessionCard key={p.label} img={p.img} label={p.label} />
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

function QASection() {
  const faqs = [
    {
      q: "Do the grants have to be repaid?",
      a: "NO. Grants do not have to be paid back. (Grants are subject to availability)",
    },
    {
      q: "Are there any upfront or application fees?",
      a: "NO. There are NEVER any up-front fees charged by The Teacher Neighbor or our preferred lenders.",
    },
    {
      q: "Can you only buy a certain home?",
      a: "NO. Any home on the market that you qualify for.",
    },
    {
      q: "Do I have to be a First-Time Home Buyer?",
      a: "NO. If you own a home you may still take advantage of The Teacher Neighbor resources and benefits, as long as you qualify.",
    },
    {
      q: "Can I put money down if I choose to?",
      a: "Yes! Absolutely.",
    },
    {
      q: "Is the Teacher Neighbor a Lender?",
      a: "NO. Financing is provided by third parties.",
    },
  ]

  return (
    <Box bg={CREAM} py={{ base: "16", md: "24" }}>
      <Container maxW="3xl">
        <Heading
          as="h2"
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="black"
          color={TEXT_DARK}
          textAlign="center"
          mb="10"
        >
          Q&A
        </Heading>
        <AccordionRoot multiple defaultValue={["0"]} variant="enclosed">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={String(i)} mb="2">
              <Box
                bg="white"
                border="1px solid"
                borderColor={CREAM_DARK}
                rounded="sm"
                overflow="hidden"
              >
                <AccordionItemTrigger
                  px="6"
                  py="4"
                  _hover={{ bg: CREAM }}
                  fontWeight="semibold"
                  fontSize="sm"
                  color={TEXT_DARK}
                >
                  {faq.q}
                </AccordionItemTrigger>
                <AccordionItemContent px="6" pb="4">
                  <Text fontSize="sm" color={TEXT_MID} lineHeight="tall">
                    {faq.a}
                  </Text>
                </AccordionItemContent>
              </Box>
            </AccordionItem>
          ))}
        </AccordionRoot>
      </Container>
    </Box>
  )
}

function TestimonialCard({
  img,
  name,
  text,
}: {
  img: string
  name: string
  text: string
}) {
  return (
    <VStack
      bg="white"
      border="1px solid"
      borderColor={CREAM_DARK}
      p="8"
      rounded="sm"
      shadow="sm"
      align="center"
      gap="4"
      flex="1"
    >
      <Box
        w="20"
        h="20"
        rounded="full"
        overflow="hidden"
        border="3px solid"
        borderColor={OLIVE_LIGHT}
        flexShrink={0}
      >
        <Image src={img} alt={name} w="full" h="full" objectFit="cover" />
      </Box>
      <Text
        fontSize="sm"
        color={TEXT_MID}
        lineHeight="tall"
        textAlign="center"
        fontStyle="italic"
      >
        "{text}"
      </Text>
      <Text fontWeight="bold" fontSize="sm" color={TEXT_DARK}>
        — {name}
      </Text>
    </VStack>
  )
}

function HappyClientsSection() {
  return (
    <Box bg="white" py={{ base: "16", md: "24" }}>
      <Container maxW="6xl">
        <Heading
          as="h2"
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="black"
          color={TEXT_DARK}
          textAlign="center"
          mb="12"
        >
          Happy Clients
        </Heading>
        <Flex gap="6" direction={{ base: "column", md: "row" }} align="stretch">
          <TestimonialCard
            img="/happy-client-1.webp"
            name="The Johnson Family"
            text="We had no idea we qualified for down payment assistance as teachers. The Teacher Neighbor made the process so simple and stress-free. We closed on our dream home in just 45 days!"
          />
          <TestimonialCard
            img="/happy-client-2.webp"
            name="Sarah M."
            text="As a first-generation homeowner and school counselor, I was overwhelmed. Cymone walked me through every single step. I couldn't have done this without the Teacher Neighbor program."
          />
          <TestimonialCard
            img="/happy-client-3.webp"
            name="The Rodriguez Family"
            text="We saved over $8,000 in down payment costs through the grants Jay helped us find. The Teacher Neighbor initiative is truly a blessing for families like ours."
          />
        </Flex>
      </Container>
    </Box>
  )
}

function LetsTalkSection() {
  return (
    <Box bg={CREAM_DARK} py={{ base: "16", md: "24" }}>
      <Container maxW="6xl">
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="12" alignItems="center">
          <VStack align="start" gap="6">
            <Logo />
            <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="black" color={TEXT_DARK}>
              Let's Talk
            </Heading>
            <Box w="12" h="0.5" bg={OLIVE} />
            <Text fontSize="sm" color={TEXT_MID} lineHeight="tall" maxW="sm">
              Ready to take the next step toward homeownership? Reach out to our team and
              let's get started on finding the right resources for you.
            </Text>
            <VStack align="start" gap="4">
              {[
                { icon: LuPhone, label: "Phone", value: "(770) 555-0182" },
                { icon: LuMail, label: "Email", value: "hello@theteacherneighbor.com" },
                { icon: LuMapPin, label: "Service Area", value: "Metro Atlanta, Georgia" },
                { icon: LuClock, label: "Hours", value: "Mon–Sat: 9am–6pm EST" },
              ].map(({ icon: IconComp, label, value }) => (
                <HStack key={label} gap="3">
                  <Box
                    w="9"
                    h="9"
                    bg={OLIVE}
                    rounded="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                  >
                    <Icon color="white" fontSize="sm">
                      <IconComp />
                    </Icon>
                  </Box>
                  <VStack align="start" gap="0">
                    <Text
                      fontSize="2xs"
                      color={TEXT_MID}
                      textTransform="uppercase"
                      letterSpacing="wider"
                      fontWeight="semibold"
                    >
                      {label}
                    </Text>
                    <Text fontSize="sm" color={TEXT_DARK} fontWeight="medium">
                      {value}
                    </Text>
                  </VStack>
                </HStack>
              ))}
            </VStack>
            <Button
              bg={OLIVE}
              color="white"
              size="lg"
              px="8"
              rounded="sm"
              fontWeight="semibold"
              fontSize="sm"
              letterSpacing="wide"
              _hover={{ bg: OLIVE_DARK }}
              mt="2"
            >
              Schedule by appointment
            </Button>
          </VStack>
          <Box>
            <Image
              src="/footer-house.webp"
              alt="Beautiful home"
              w="full"
              h={{ base: "64", md: "480px" }}
              objectFit="cover"
              rounded="sm"
              shadow="lg"
            />
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}

function Footer() {
  return (
    <Box bg={TEXT_DARK} py="8">
      <Container maxW="6xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "start", md: "center" }}
          gap="4"
        >
          <Logo light />
          <Text fontSize="xs" color="gray.500" textAlign={{ base: "start", md: "center" }}>
            © 2024 The Teacher Neighbor. All rights reserved.
          </Text>
          <Text fontSize="xs" color="gray.500">
            Cobb Board of Realtors Association
          </Text>
        </Flex>
      </Container>
    </Box>
  )
}

function App() {
  return (
    <Box bg={CREAM}>
      <HeroSection />
      <ProgramIntroSection />
      <MeetUsSection />
      <WhatIsSection />
      <CommunityBenefitSection />
      <WhoIsItForSection />
      <QASection />
      <HappyClientsSection />
      <LetsTalkSection />
      <Footer />
    </Box>
  )
}

export default App
