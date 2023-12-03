const users = [
    {
        id: 1,
        firstname: 'Lily',
        lastname: 'Chen',
        initials: 'LC'
    },
    {
        id: 2,
        firstname: 'Maple',
        lastname: 'Chen',
        initials: 'MN'
    },
    {
        id: 3,
        firstname: 'Raymond',
        lastname: 'Banks',
        initials: 'RB'
    },
    {
        id: 4,
        firstname: 'Pam',
        lastname: 'Puelo',
        initials: 'PP'
    },
    {
        id: 5,
        firstname: 'Feya',
        lastname: 'Brown',
        initials: 'FB'
    }
]

const groups = [
    {
        name: 'Suitemates',
        members: [
            {
                id: 1,
                firstname: 'Lily',
                lastname: 'Chen',
                initials: 'LC'
            },
            {
                id: 2,
                firstname: 'Maple',
                lastname: 'Chen',
                initials: 'MN'
            },
            {
                id: 3,
                firstname: 'Raymond',
                lastname: 'Banks',
                initials: 'RB'
            },
            {
                id: 4,
                firstname: 'Pam',
                lastname: 'Puelo',
                initials: 'PP'
            }
        ],
        list: [
            {
                name: 'Kossar\'s Bagels',
                organizer: {
                    id: 1,
                    firstname: 'Lily',
                    lastname: 'Chen',
                    initials: 'LC'
                },
                invitees: [
                    {
                        id: 2,
                        firstname: 'Maple',
                        lastname: 'Chen',
                        initials: 'MN'
                    },
                    {
                        id: 3,
                        firstname: 'Raymond',
                        lastname: 'Banks',
                        initials: 'RB'
                    },
                    {
                        id: 4,
                        firstname: 'Pam',
                        lastname: 'Puelo',
                        initials: 'PP'
                    }
                ]
            }

        ]
    }
]

const events = [
    {
        pending: [
            {
                id: '1',
                status: 'Tentatively',
                title: 'Ktown Karaoke',
                time: 'Thu, Nov 16, 11:00 AM - 12:00 PM',
                start: 'Thu, Nov 16, 11:00 AM',
                end: 'Thu, Nov 16, 12:00 PM',
                location: 'Gagopa Karaoke',
                confirmedUsers: [
                    {
                        id: 1,
                        firstname: 'Lily',
                        lastname: 'Chen',
                        initials: 'LC'
                    },
                    {
                        id: 2,
                        firstname: 'Maple',
                        lastname: 'Chen',
                        initials: 'MN'
                    },
                    {
                        id: 3,
                        firstname: 'Raymond',
                        lastname: 'Banks',
                        initials: 'RB'
                    }
                ],
                pendingUsers: [
                    {
                        id: 5,
                        firstname: 'Feya',
                        lastname: 'Brown',
                        initials: 'FB'
                    }
                ]
            },
            {
                id: '2',
                status: 'Tentatively',
                title: 'Dinner Cruise',
                time: 'Thu, Nov 16, 8:00 PM - 9:30 PM',
                start: 'Fri, Nov 25, 8:00 PM',
                end: 'Fri, Nov 25, 9:30 PM',
                location: 'Sunset Cruise',
                confirmedUsers: [
                    {
                        id: 2,
                        firstname: 'Maple',
                        lastname: 'Chen',
                        initials: 'MN'
                    },
                    {
                        id: 3,
                        firstname: 'Raymond',
                        lastname: 'Banks',
                        initials: 'RB'
                    }
                ],
                pendingUsers: [
                    {
                        id: 1,
                        firstname: 'Lily',
                        lastname: 'Chen',
                        initials: 'LC'
                    }
                ]
            },
            {
                id: '3',
                status: 'Scheduled',
                title: 'Pottery Lesson',
                time: 'Thu, Nov 16, 11:00 AM - 12:00 PM',
                start: 'Thu, Nov 16, 11:00 AM',
                end: 'Thu, Nov 16, 12:00 PM',
                location: 'Studio',
                confirmedUsers: [
                    {
                        id: '2',
                        status: 'Tentatively',
                        title: 'Dinner Cruise',
                        time: 'Thu, Nov 16, 8:00 PM - 9:30 PM',
                        start: 'Fri, Nov 25, 8:00 PM',
                        end: 'Fri, Nov 25, 9:30 PM',
                        location: 'Sunset Cruise',
                        confirmedUsers: ['Abby', 'Jenny', 'Apple'],
                        pendingUsers: ['You']
                    },
                    {
                        id: '3',
                        status: 'Scheduled',
                        title: 'Pottery Lesson',
                        time: 'Thu, Nov 16, 11:00 AM - 12:00 PM',
                        start: 'Thu, Nov 16, 11:00 AM',
                        end: 'Thu, Nov 16, 12:00 PM',
                        location: 'Studio',
                        confirmedUsers: ['Abby', 'Jenny', 'You'],
                        pendingUsers: ['Abby', 'Wendy', 'Liana', 'Kaylee']
                    }
                ],
                pendingUsers: [
                    {
                        id: 2,
                        firstname: 'Maple',
                        lastname: 'Chen',
                        initials: 'MN'
                    },
                    {
                        id: 3,
                        firstname: 'Raymond',
                        lastname: 'Banks',
                        initials: 'RB'
                    }

                ]
            }
        ],
        confirmed: [
            {
                id: '1',
                status: 'Scheduled',
                title: 'Brunch at EC',
                time: 'Thu, Nov 16, 11:00 AM - 12:00 PM',
                location: 'East Campus Residence Hall',
                confirmedUsers: [
                    {
                        id: 4,
                        firstname: 'Pam',
                        lastname: 'Puelo',
                        initials: 'PP'
                    },
                    {
                        id: 5,
                        firstname: 'Feya',
                        lastname: 'Brown',
                        initials: 'FB'
                    }

                ]
            },
            {
                id: '2',
                status: 'Scheduled',
                title: 'Barbie Movie',
                time: 'Thu, Nov 25, 3:00 PM - 6:00 PM',
                location: 'AMC 84th Street',
                confirmedUsers: [
                    {
                        id: 1,
                        firstname: 'Lily',
                        lastname: 'Chen',
                        initials: 'LC'
                    },
                    {
                        id: 2,
                        firstname: 'Maple',
                        lastname: 'Chen',
                        initials: 'MN'
                    }
                ]
            }
        ]
    }
]


module.exports = {
    groups,
    users,
    events
}