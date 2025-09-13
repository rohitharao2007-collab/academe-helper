// Campus information database
interface CampusInfo {
  schedules: {
    classes: string;
    library: string;
    dining: string;
    administrative: string;
  };
  facilities: {
    academic: string[];
    recreational: string[];
    services: string[];
  };
  dining: {
    locations: string[];
    hours: string;
    specialDiets: string[];
  };
  library: {
    hours: string;
    services: string[];
    resources: string[];
  };
  administrative: {
    registrar: string;
    financial: string;
    studentServices: string;
    itSupport: string;
  };
}

const campusData: CampusInfo = {
  schedules: {
    classes: "Class schedules are available through the student portal. Fall semester classes run Monday-Friday 8:00 AM - 10:00 PM. Saturday classes are available 9:00 AM - 6:00 PM. Check your student dashboard for specific course times and room assignments.",
    library: "Main Library: Monday-Thursday 7:00 AM - 2:00 AM, Friday 7:00 AM - 8:00 PM, Saturday 9:00 AM - 8:00 PM, Sunday 10:00 AM - 2:00 AM. Science Library: Monday-Friday 8:00 AM - 10:00 PM, Weekend hours vary by semester.",
    dining: "Dining halls operate: Breakfast 7:00-10:00 AM, Lunch 11:00 AM-2:30 PM, Dinner 5:00-8:30 PM. Late night dining available at Campus Center until 1:00 AM Sunday-Thursday.",
    administrative: "Administrative offices are open Monday-Friday 8:00 AM - 5:00 PM. Summer hours may vary. Most services also available online 24/7 through the student portal.",
  },
  facilities: {
    academic: [
      "Science Complex with state-of-the-art laboratories",
      "Engineering Building with maker spaces and computer labs",
      "Business School with case study rooms and simulation labs",
      "Arts Center with studios, galleries, and performance spaces",
      "Library complex with 24/7 study areas and group rooms",
    ],
    recreational: [
      "Fitness Center with cardio and weight equipment",
      "Olympic-size swimming pool and aquatic center",
      "Tennis courts and basketball courts",
      "Running track and athletic fields",
      "Rock climbing wall and yoga studios",
    ],
    services: [
      "Campus Health Center with medical and counseling services",
      "Career Services Center for job placement and internships",
      "Writing Center for academic support",
      "IT Help Desk for technical support",
      "Campus Safety and Security (24/7)",
    ],
  },
  dining: {
    locations: [
      "Main Dining Hall - All-you-care-to-eat with international cuisine",
      "Campus Grill - Burgers, sandwiches, and quick meals",
      "Café Luna - Coffee, pastries, and light meals",
      "Panda Express - Asian cuisine",
      "Fresh Market - Salads, wraps, and healthy options",
    ],
    hours: "Most dining locations open 7:00 AM - 9:00 PM. Weekend hours may vary. Mobile ordering available through the campus app.",
    specialDiets: [
      "Vegetarian and vegan options available at all locations",
      "Gluten-free menu items clearly marked",
      "Halal and kosher options available at Main Dining Hall",
      "Allergen information available upon request",
    ],
  },
  library: {
    hours: "Main Library open 24/7 during finals week. Regular hours: Monday-Thursday 7:00 AM - 2:00 AM, Friday-Sunday with extended weekend hours.",
    services: [
      "Research assistance and librarian consultations",
      "Interlibrary loan and document delivery",
      "Study rooms and group collaboration spaces",
      "Computer labs with specialized software",
      "Printing, copying, and scanning services",
      "Course reserves and textbook rentals",
    ],
    resources: [
      "Online databases and digital collections",
      "Special collections and archives",
      "Thesis and dissertation binding services",
      "Media collection (DVDs, audiobooks, streaming)",
      "Quiet study floors and collaborative learning spaces",
    ],
  },
  administrative: {
    registrar: "Registration, transcripts, enrollment verification, and degree audits. Online services available 24/7. Office hours: Monday-Friday 8:00 AM - 5:00 PM. Located in Administration Building, Room 150.",
    financial: "Tuition payments, financial aid, scholarships, and billing inquiries. Payment plans available. Office hours: Monday-Friday 8:00 AM - 5:00 PM. Located in Student Services Building, Room 200.",
    studentServices: "Academic advising, disability services, counseling, and student life support. Walk-in hours: Monday-Friday 9:00 AM - 4:00 PM. Located in Student Center, Ground Floor.",
    itSupport: "Technical support for campus accounts, WiFi, email, and software. 24/7 online support portal. Phone support: Monday-Friday 8:00 AM - 8:00 PM. Located in Library Building, Room 100.",
  },
};

// Simple keyword-based response system
export function getCampusResponse(query: string): string {
  const lowerQuery = query.toLowerCase();

  // Schedule-related queries
  if (lowerQuery.includes("schedule") || lowerQuery.includes("time") || lowerQuery.includes("hours")) {
    if (lowerQuery.includes("class") || lowerQuery.includes("course")) {
      return campusData.schedules.classes;
    }
    if (lowerQuery.includes("library")) {
      return campusData.schedules.library;
    }
    if (lowerQuery.includes("dining") || lowerQuery.includes("food") || lowerQuery.includes("meal")) {
      return campusData.schedules.dining;
    }
    if (lowerQuery.includes("admin") || lowerQuery.includes("office")) {
      return campusData.schedules.administrative;
    }
    return "Here are the general campus hours:\n\n" + 
           "Classes: Monday-Friday 8:00 AM - 10:00 PM\n" +
           "Library: 7:00 AM - 2:00 AM (varies by day)\n" +
           "Dining: 7:00 AM - 8:30 PM (meal periods)\n" +
           "Administrative: Monday-Friday 8:00 AM - 5:00 PM";
  }

  // Dining queries
  if (lowerQuery.includes("dining") || lowerQuery.includes("food") || lowerQuery.includes("eat") || lowerQuery.includes("restaurant") || lowerQuery.includes("meal")) {
    let response = "🍽️ **Campus Dining Information**\n\n";
    response += "**Locations:**\n" + campusData.dining.locations.map(loc => `• ${loc}`).join("\n") + "\n\n";
    response += "**Hours:** " + campusData.dining.hours + "\n\n";
    response += "**Special Diets:**\n" + campusData.dining.specialDiets.map(diet => `• ${diet}`).join("\n");
    return response;
  }

  // Library queries
  if (lowerQuery.includes("library") || lowerQuery.includes("book") || lowerQuery.includes("study")) {
    let response = "📚 **Library Services**\n\n";
    response += "**Hours:** " + campusData.library.hours + "\n\n";
    response += "**Services:**\n" + campusData.library.services.map(service => `• ${service}`).join("\n") + "\n\n";
    response += "**Resources:**\n" + campusData.library.resources.map(resource => `• ${resource}`).join("\n");
    return response;
  }

  // Facility queries
  if (lowerQuery.includes("facility") || lowerQuery.includes("building") || lowerQuery.includes("gym") || lowerQuery.includes("lab") || lowerQuery.includes("map")) {
    let response = "🏛️ **Campus Facilities**\n\n";
    response += "**Academic Facilities:**\n" + campusData.facilities.academic.map(fac => `• ${fac}`).join("\n") + "\n\n";
    response += "**Recreational Facilities:**\n" + campusData.facilities.recreational.map(fac => `• ${fac}`).join("\n") + "\n\n";
    response += "**Campus Services:**\n" + campusData.facilities.services.map(fac => `• ${fac}`).join("\n");
    return response;
  }

  // Administrative queries
  if (lowerQuery.includes("admin") || lowerQuery.includes("registration") || lowerQuery.includes("transcript") || lowerQuery.includes("financial") || lowerQuery.includes("tuition") || lowerQuery.includes("support")) {
    if (lowerQuery.includes("register") || lowerQuery.includes("transcript") || lowerQuery.includes("enroll")) {
      return "🏛️ **Registrar Services**\n\n" + campusData.administrative.registrar;
    }
    if (lowerQuery.includes("financial") || lowerQuery.includes("tuition") || lowerQuery.includes("payment") || lowerQuery.includes("aid")) {
      return "💰 **Financial Services**\n\n" + campusData.administrative.financial;
    }
    if (lowerQuery.includes("student") || lowerQuery.includes("counsel") || lowerQuery.includes("advising")) {
      return "🎓 **Student Services**\n\n" + campusData.administrative.studentServices;
    }
    if (lowerQuery.includes("it") || lowerQuery.includes("tech") || lowerQuery.includes("computer") || lowerQuery.includes("wifi")) {
      return "💻 **IT Support**\n\n" + campusData.administrative.itSupport;
    }
    return "🏛️ **Administrative Services**\n\nI can help you with registrar services, financial aid, student services, and IT support. What specific area do you need help with?";
  }

  // Greeting responses
  if (lowerQuery.includes("hello") || lowerQuery.includes("hi") || lowerQuery.includes("help")) {
    return "Hello! I'm here to help you navigate campus life. I can provide information about:\n\n• Class schedules and academic calendars\n• Campus facilities and buildings\n• Dining locations and hours\n• Library services and resources\n• Administrative procedures and contacts\n\nWhat would you like to know more about?";
  }

  // Default response
  return "I'd be happy to help! I can provide information about campus schedules, facilities, dining options, library services, and administrative procedures. Could you please be more specific about what you're looking for? For example, you could ask about 'dining hours', 'library services', or 'class schedules'.";
}