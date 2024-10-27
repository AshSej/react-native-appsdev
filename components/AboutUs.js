import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

// Replace these imports with the actual image paths for each team member
import member1Image from '../assets/profile.png';
import member2Image from '../assets/profile.png';
import member3Image from '../assets/profile.png';
import member4Image from '../assets/profile.png';
import member5Image from '../assets/profile.png';
import member6Image from '../assets/profile.png';

const teamMembers = [
  {
    name: 'MANALO, MONICA YVETTE',
    image: member1Image,
    contribution: 'LEADER',
  },
  {
    name: 'ALAYE, MA. JESSA B.',
    image: member2Image,
    contribution: 'MEMBER',
  },
  {
    name: 'BAGTONG, HERMILO',
    image: member3Image,
    contribution: 'MEMBER',
  },
  {
    name: 'DE DUZMAN, LAWRENCE ADRIAN',
    image: member4Image,
    contribution: 'MEMBER',
  },
  {
    name: 'MOLO, JUVY ANN',
    image: member5Image,
    contribution: 'MEMBER',
  },
  {
    name: 'RAMOS, RICHARD JR',
    image: member6Image,
    contribution: 'MEMBER',
  },
];

const AboutUs = () => {
  return (
    <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>About Us</Text>
        <Text style={styles.description}>
          We are a team of dedicated developers committed to delivering the best experience. All team members contributed
          to developing this project.
        </Text>

        {teamMembers.map((member, index) => (
          <View key={index} style={styles.memberCard}>
            <View style={[styles.memberContent, index % 2 === 0 ? styles.leftAlign : styles.rightAlign]}>
              {index % 2 === 0 ? (
                <>
                  <Image source={member.image} style={styles.image} />
                  <View style={styles.textContainer}>
                    <Text style={styles.memberName}>{member.name}</Text>
                    <Text style={styles.memberContribution}>{member.contribution}</Text>
                  </View>
                </>
              ) : (
                <>
                  <View style={styles.textContainer}>
                    <Text style={styles.memberName}>{member.name}</Text>
                    <Text style={styles.memberContribution}>{member.contribution}</Text>
                  </View>
                  <Image source={member.image} style={styles.image} />
                </>
              )}
            </View>
          </View>
        ))}

        {/* New Sections */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>UI/UX Design</Text>
          <Text style={styles.sectionDescription}>
            The UI/UX design of the physical education project is created to help many types of users, including students, teachers, 
            and fitness fans. It focuses on clarity and simplicity, making it easy to use. The color scheme mainly uses vibrant 
            purple tones, which helps keep the design balanced and visually pleasing. The primary font is modern and easy to read, 
            which improves usability on different devices helping users find important information quickly. Ample spacing between 
            elements keeps the layout clean, so users can focus on the content without feeling overwhelmed. The side navigation drawer 
            allows users to easily switch between sections, improves usability, and encourages users to engage more with the educational material. 
            The design shows a strong commitment to user-friendly principles, creating a welcoming platform for exploring physical education.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>USER PERSONA</Text>
          <Text style={styles.sectionDescription}>
            The primary users of the app are individuals interested in learning about physical education, fitness, and related information. 
            This can include students, fitness enthusiasts, educators, and general users looking for resources and knowledge in the field 
            of physical education. The design of the physical education app is thoughtfully aligned with its purpose and the needs of its 
            target audience. By prioritizing clarity and accessibility, the app creates an environment conducive to learning and exploration. 
            This design approach not only enhances user satisfaction but also reinforces the app's commitment to providing valuable resources 
            in the field of physical education and fitness.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>COLOR THEORY</Text>
          <Text style={styles.sectionDescription}>
            <Text style={styles.boldText}>1. Color Palette</Text>
            {'\n'}
            - <Text style={styles.boldText}>Primary Colors:</Text> The purple tones (#4a148c, #6a1b9a) create an inviting and energetic feel, 
            associated with creativity and enthusiasm, ideal for a project focused on education and fitness. 
            {'\n\n'}
            - <Text style={styles.boldText}>Background Color:</Text> A light purple background (#f3e5f5) sets a friendly and engaging atmosphere while 
            keeping the content at the forefront.
            {'\n\n'}
            <Text style={styles.boldText}>2. 60-30-10 Rule:</Text> By using 60% light purple for backgrounds, 30% darker purples for text and accents, 
            and 10% for highlights or call-to-action elements, you maintain visual balance and ensure that users can easily navigate the content.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>TYPOGRAPHY</Text>
          <Text style={styles.sectionDescription}>
          The typography of the project utilizes Roboto as the primary font due to its modern aesthetic and legibility, making it an ideal 
          choice for diverse users, including students and casual readers. Its clean lines enhance readability, particularly for educational material. 
          Additionally, a clear hierarchy is established through varying font sizes and weights, effectively guiding users through the content.
          This hierarchy helps users discern the importance of different pieces of information and understand their relationship to the overall message.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SPACING</Text>
          <Text style={styles.sectionDescription}>
          The design incorporates generous padding and margins to make reading easier and reduce clutter. This helps users take in the information better. 
          There is enough space between sections, making it clear where one topic ends and another begins, which improves navigation and makes the overall experience better for users.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>NAVIGATION</Text>
          <Text style={styles.sectionDescription}>
          The navigation in your app uses a side navigation drawer that organizes important sections like "Home," "History," "Notifications," "About Us," and "Log Out." This design keeps 
          the main screen tidy while making it easy for users to find what they need, especially for first-time users.To enhance usability, each menu item has clear labels and recognizable 
          icons, helping users quickly understand their functions. Active sections are highlighted, so users can easily see where they are in the app.The navigation is simple, allowing
          users to find information quickly without unnecessary steps. A back navigation option helps users return to the previous screen easily, reducing frustration. The navigation
          is designed to work well and ensuring a smooth experience for the users.
          </Text>
        </View>


        <View style={styles.paddingBottom} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f3e5f5', // Light purple background color for the overall container
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4a148c', // Darker purple for the title
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'justify', // Changed to justified text
    marginBottom: 30,
    lineHeight: 22,
    color: '#6a1b9a', // Softer purple for paragraph text
  },
  memberCard: {
    marginBottom: 20,
    width: '100%',
    backgroundColor: '#ffffff', // Changed to white for the member card background
    borderRadius: 10,
    shadowColor: '#9575cd', // Light purple shadow color
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 5, // Increased elevation for a more prominent shadow
  },
  memberContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#e1bee7', // Light purple border
    borderRadius: 10,
  },
  leftAlign: {
    justifyContent: 'flex-start',
  },
  rightAlign: {
    justifyContent: 'flex-end',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 10,
    borderWidth: 2,
    borderColor: '#ab47bc', // Profile image border in purple tone
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  memberName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4a148c', // Darker purple for text
  },
  memberContribution: {
    fontSize: 14,
    color: '#6a1b9a',
    marginTop: 5,
  },
  section: {
    marginTop: 30,
    marginBottom: 30,
    paddingHorizontal: 10,
    backgroundColor: '#f3e5f5', // Matching background color
    paddingVertical: 15,
    borderRadius: 10,
    shadowColor: '#9575cd', // Light purple shadow
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ab47bc', // Accent color for section titles
    marginBottom: 10,
  },
  sectionDescription: {
    fontSize: 16,
    color: '#4a148c',
    lineHeight: 22,
    textAlign: 'justify', // Justified text for section descriptions
  },
  paddingBottom: {
    height: 40,
  },
  boldText: {
    fontWeight: 'bold', // Bold text for specific sections
  },
});

export default AboutUs;
