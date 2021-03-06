const profileSelector = '.core-rail > *:first-child section >'

const template = {
  profile: {
    selector: '.pv-top-card',
    fields: {
      name: `.pv-top-card--list:first-child li:first-child`,
      headline: `h2`,
      location: `.pv-top-card--list:last-child li:first-child`,
      connections: `.pv-top-card--list:last-child li:nth-child(2)`,
      image_url: {
		    selector: `img.pv-top-card__photo`,
        attribute: 'src'
      }
    }
  },
  about: {
    selector: '.pv-about-section',
    fields: {
      text: 'p'
    }
  },
  positions: {
    selector: '#experience-section li:not(.pv-entity__position-group-role-item)',
    fields: {
      title: 'h3',
      link: {
        selector: 'a',
        attribute: 'href',
      },
      url: {
        selector: 'a',
        attribute: 'href'
      },
      company_name: '.pv-entity__secondary-title',
      location: '.pv-entity__location span:last-child',
      description: '.pv-entity__description',
      date_range: '.pv-entity__date-range span:last-child',
      duration: '.pv-entity__bullet-item-v2',
      roles: {
        selector: 'li',
        hasChildrenFields: true,
        fields: {
          title: 'h3',
          description: '.pv-entity__description',
          date_range: '.pv-entity__date-range span:last-child',
          duration: '.pv-entity__bullet-item-v2',
          location: '.pv-entity__location span:last-child'
        }
      }
    }
  },
  educations: {
    selector: '#education-section li',
    fields: {
      title: 'h3',
      degree: 'span[class=pv-entity__comma-item]',
      url: {
        selector: 'a',
        attribute: 'href'
      },
	    field_of_study: 'p.pv-entity__fos span:nth-child(2)',
      year_start: '.pv-entity__dates time:nth-child(1)',
      year_end: '.pv-entity__dates time:nth-child(2)',
      description: '.pv-entity__description'
    }
  },
  skills: {
    selector: '.pv-skill-category-entity__skill-wrapper',
    fields: {
      title: '.pv-skill-category-entity__name-text',
      count: '.pv-skill-category-entity__endorsement-count'
    }
  },
  recommendations_count: {
    selector: '.recommendations-inlining',
    fields: {
      received: '.artdeco-tab:nth-child(1)',
      given: '.artdeco-tab:nth-child(2)'
    }
  },
  recommendations_received: {
    selector: '.recommendations-inlining',
    fields: {
      user: {
        selector: '.pv-recommendation-entity__member',
        attribute: 'href'
      },
      text: 'blockquote.pv-recommendation-entity__text',
      profile_image: {
        selector: 'a img',
        attribute: 'src'
      },
      name: {
        selector: 'a h3'
      },
      user_description: {
        selector: '.pv-recommendation-entity__headline'
      }
    }
  },
  recommendations_given: {
    selector: '.artdeco-tabpanel li.pv-recommendation-entity',
    fields: {
      user: {
        selector: '.pv-recommendation-entity__member',
        attribute: 'href'
      },
      text: 'blockquote.pv-recommendation-entity__text',
      profile_image: {
        selector: 'a img',
        attribute: 'src'
      },
      name: {
        selector: 'a h3'
      },
      user_description: {
        selector: '.pv-recommendation-entity__headline'
      }
    }
  },
  accomplishments: {
    selector: '.pv-accomplishments-section > div',
    fields: {
      count: 'h3 span:last-child',
      title: '.pv-accomplishments-block__title',
      items: {
        selector: 'li',
        isMultipleFields: true
      }
    }
  },
  people_also_viewed: {
    selector: 'li.pv-browsemap-section__member-container',
    fields: {
      user: {
        selector: 'a',
        attribute: 'href'
      },
      text: 'p',
      profile_image: {
        selector: 'a img',
        attribute: 'src'
      },
      name: {
        selector: '.name'
      }
    }
  },
  volunteer_experiences: {
    selector: 'section.volunteering-section li',
    fields: {
      title: 'h3',
      experience: 'span[class=pv-entity__secondary-title]',
      location: '.pv-entity__location span:nth-child(2)',
      description: '.pv-volunteer-causes',
      date_range: '.pv-entity__date-range span:nth-child(2)',
      duration: '.pv-entity__bullet-item'
    }
  },
  courses: {
    selector: '#certifications-section li',
    fields: {
      name: '.pv-certifications__summary-info h3',
      institution: '.pv-certifications__summary-info p span:nth-child(2)',
      date: '.pv-certifications__summary-info p:nth-child(3) span:nth-child(2)'
    }
  },
  languages: {
    selector: '.pv-accomplishments-section',
    fields: {
      name: '.pv-accomplishment-entity__title',
      proficiency: '.pv-accomplishment-entity__proficiency',
    }
  },
  projects: {
    selector: '.pv-accomplishments-section',
    fields: {
      name: '.pv-accomplishment-entity__title',
      date_range: '.pv-accomplishment-entity__date',
      description: '.pv-accomplishment-entity__description',
      link: {
        selector: '.pv-accomplishment-entity__external-source',
        attribute: 'href'
      }
    }
  }
}


module.exports = template