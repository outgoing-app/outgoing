const users = [
    {
        userId: 1,
        firstname: 'Maya',
        lastname: 'Sundar',
        initials: 'MS'
    },
    {
        userId: 2,
        firstname: 'Lydia',
        lastname: 'Ying',
        initials: 'LY'
    },
    {
        userId: 3,
        firstname: 'Rissa',
        lastname: 'Chua',
        initials: 'RC'
    },
    {
        userId: 4,
        firstname: 'Tattie',
        lastname: 'Chitrakorn',
        initials: 'TC'
    },
    {
        userId: 5,
        firstname: 'Brian',
        lastname: 'Smith',
        initials: 'BS'
    },
    {
        userId: 6,
        firstname: 'Alice',
        lastname: 'Sung',
        initials: 'AS'
    },
    {
        userId: 7,
        firstname: 'Grace',
        lastname: 'Crawford',
        initials: 'GC'
    },
    {
        userId: 9,
        firstname: 'Nina',
        lastname: 'Lou',
        initials: 'NL'
    },
    {
        userId: 10,
        firstname: 'Alyssa',
        lastname: 'Yu',
        initials: 'AY'
    },
    {
        userId: 11,
        firstname: 'Simon',
        lastname: 'Ash',
        initials: 'SA'
    }
]

const groups = [
    {
        name: 'Suitemates',
        memberIds: [1, 6, 7],
        members: [
            {
                userId: 1,
                firstname: 'Maya',
                lastname: 'Sundar',
                initials: 'MS'
            },
            {
                userId: 6,
                firstname: 'Alice',
                lastname: 'Sung',
                initials: 'AS'
            },
            {
                userId: 7,
                firstname: 'Grace',
                lastname: 'Crawford',
                initials: 'GC'
            }
        ],
        list: [
            'Kossar\'s Bagels',
            'Bronx Zoo',
            'Karaoke'
        ]
    },
    {
        name: 'UI Design Team 26',
        memberIds: [1, 2, 3, 4],
        members: [
            {
                userId: 1,
                firstname: 'Maya',
                lastname: 'Sundar',
                initials: 'MS'
            },
            {
                userId: 2,
                firstname: 'Lydia',
                lastname: 'Ying',
                initials: 'LY'
            },
            {
                userId: 3,
                firstname: 'Rissa',
                lastname: 'Chua',
                initials: 'RC'
            },
            {
                userId: 4,
                firstname: 'Tattie',
                lastname: 'Chitrakorn',
                initials: 'TC'
            }
        ],
        list: [
            'Tiger Sugar boba',
            'Project demo rehearsal',
            'Escape room'
        ]
    },
    {
        name: 'High School Reunion',
        memberIds: [1, 9, 10, 11],
        members: [
            {
                userId: 1,
                firstname: 'Maya',
                lastname: 'Sundar',
                initials: 'MS'
            },
            {
                userId: 9,
                firstname: 'Nina',
                lastname: 'Lou',
                initials: 'NL'
            },
            {
                userId: 10,
                firstname: 'Alyssa',
                lastname: 'Yu',
                initials: 'AY'
            },
            {
                userId: 11,
                firstname: 'Simon',
                lastname: 'Ash',
                initials: 'SA'
            }
        ],
        list: [
            'Soho Shopping',
            'Dinner at Lower East Side',
            'Visit Rockaway Beach and DUMBO'
        ]
    }
]

const events = [
    {
        pending: [
            {
                organizerId: 2,
                status: 'Tentatively',
                colorCode: 'red',
                title: 'Ktown Karaoke',
                day: 'Thu',
                startDate: '11/16/23',
                startTime: '5:00 PM',
                endDate: '11/16/23',
                endTime: '7:00 PM',
                location: 'Gagopa Karaoke',
                confirmedUsers: [
                    {
                        userId: 2,
                        firstname: 'Lydia',
                        lastname: 'Ying',
                        initials: 'LY'
                    },
                    {
                        userId: 3,
                        firstname: 'Rissa',
                        lastname: 'Chua',
                        initials: 'RC'
                    },
                ],
                pendingUsers: [
                    {
                        userId: 1,
                        firstname: 'Maya',
                        lastname: 'Sundar',
                        initials: 'MS'
                    },
                    {
                        id: 7,
                        firstname: 'Grace',
                        lastname: 'Crawford',
                        initials: 'GC'
                    }
                ],
                pollingOptions: [
                    {
                        date: '11/15/23',
                        startTime: '5:00 PM',
                        endTime: '7:00 PM',
                        count: 2
                    },
                    {
                        date: '11/15/23',
                        startTime: '7:00 PM',
                        endTime: '9:00 PM',
                        count: 0
                    },
                    {
                        date: '11/15/23',
                        startTime: '9:00 PM',
                        endTime: '11:00 PM',
                        count: 0
                    }
                ],
                contributors: [
                    {
                        userId: 2,
                        firstname: 'Lydia',
                        lastname: 'Ying',
                        initials: 'LY'
                    },
                    {
                        userId: 3,
                        firstname: 'Rissa',
                        lastname: 'Chua',
                        initials: 'RC'
                    },
                    {
                        userId: 1,
                        firstname: 'Maya',
                        lastname: 'Sundar',
                        initials: 'MS'
                    },
                    {
                        id: 7,
                        firstname: 'Grace',
                        lastname: 'Crawford',
                        initials: 'GC'
                    }
                ]
            },
            {
                organizerId: 3,
                status: 'Tentatively',
                colorCode: 'yellow',
                title: 'Dinner Cruise',
                day: 'Sat',
                startDate: '11/25/23',
                startTime: '8:00 PM',
                endDate: '11/25/23',
                endTime: '9:30 PM',
                location: 'Sunset Cruise',
                confirmedUsers: [
                    {
                        userId: 3,
                        firstname: 'Rissa',
                        lastname: 'Chua',
                        initials: 'RC'
                    },
                    {
                        userId: 4,
                        firstname: 'Tattie',
                        lastname: 'Chitrakorn',
                        initials: 'TC'
                    }
                ],
                pendingUsers: [
                    {
                        userId: 1,
                        firstname: 'Maya',
                        lastname: 'Sundar',
                        initials: 'MS'
                    }
                ],
                pollingOptions: [
                    {
                        date: '11/25/23',
                        startTime: '8:00 PM',
                        endTime: '9:30 PM',
                        count: 3
                    },
                    {
                        date: '11/25/23',
                        startTime: '8:30 PM',
                        endTime: '10:00 PM',
                        count: 0
                    }
                ],
                contributors: [
                    {
                        userId: 3,
                        firstname: 'Rissa',
                        lastname: 'Chua',
                        initials: 'RC'
                    },
                    {
                        userId: 4,
                        firstname: 'Tattie',
                        lastname: 'Chitrakorn',
                        initials: 'TC'
                    },
                    {
                        userId: 1,
                        firstname: 'Maya',
                        lastname: 'Sundar',
                        initials: 'MS'
                    }
                ]
            },
            {
                organizerId: 1,
                status: 'Scheduled',
                colorCode: 'green',
                title: 'Pottery Lesson',
                day: 'Tue',
                startDate: '11/28/23',
                startTime: '9:00 PM',
                endDate: '11/28/23',
                endTime: '11:00 PM',
                location: 'Studio',
                confirmedUsers: [
                    {
                        userId: 1,
                        firstname: 'Maya',
                        lastname: 'Sundar',
                        initials: 'MS'
                    }
                ],
                pendingUsers: [
                    {
                        userId: 2,
                        firstname: 'Lydia',
                        lastname: 'Ying',
                        initials: 'LY'
                    },
                    {
                        userId: 3,
                        firstname: 'Rissa',
                        lastname: 'Chua',
                        initials: 'RC'
                    }
                ],
                pollingOptions: [
                    {
                        date: '11/27/23',
                        startTime: '6:00 PM',
                        endTime: '8:00 PM',
                        count: 1
                    },
                    {
                        date: '11/28/23',
                        startTime: '9:00 PM',
                        endTime: '11:00 PM',
                        count: 2
                    },
                    {
                        date: '11/29/23',
                        startTime: '10:00 AM',
                        endTime: '12:00 PM',
                        count: 0
                    }
                ],
                contributors: [
                    {
                        userId: 1,
                        firstname: 'Maya',
                        lastname: 'Sundar',
                        initials: 'MS'
                    },
                    {
                        userId: 2,
                        firstname: 'Lydia',
                        lastname: 'Ying',
                        initials: 'LY'
                    }
                ]
            }
        ],
        confirmed: [
            {
                eventId: 4,
                organizerId: 1,
                status: 'Scheduled',
                colorCode: 'green',
                title: 'Brunch at EC',
                day: 'Thu',
                startDate: '11/16/23',
                startTime: '11:00 AM',
                endDate: '11/16/23',
                endTime: '12:00 PM',
                location: 'East Campus Residence Hall',
                confirmedUsers: [
                    {
                        userId: 1,
                        firstname: 'Maya',
                        lastname: 'Sundar',
                        initials: 'MS'
                    },
                    {
                        userId: 2,
                        firstname: 'Lydia',
                        lastname: 'Ying',
                        initials: 'LY'
                    },
                    {
                        userId: 3,
                        firstname: 'Rissa',
                        lastname: 'Chua',
                        initials: 'RC'
                    },
                    {
                        userId: 4,
                        firstname: 'Tattie',
                        lastname: 'Chitrakorn',
                        initials: 'TC'
                    }
                ],
                pendingUsers: [],
                pollingOptions: [],
                contributors: [
                    {
                        userId: 1,
                        firstname: 'Maya',
                        lastname: 'Sundar',
                        initials: 'MS'
                    },
                    {
                        userId: 2,
                        firstname: 'Lydia',
                        lastname: 'Ying',
                        initials: 'LY'
                    }
                ]
            },
            {
                eventId: 5,
                organizerId: 1,
                status: 'Scheduled',
                colorCode: 'green',
                title: 'Barbie Movie',
                day: 'Thu',
                startDate: '11/25/23',
                startTime: '3:00 PM',
                endDate: '11/25/23',
                endTime: '6:00 PM',
                location: 'AMC 84th Street',
                confirmedUsers: [
                    {
                        userId: 1,
                        firstname: 'Maya',
                        lastname: 'Sundar',
                        initials: 'MS'
                    },
                    {
                        userId: 2,
                        firstname: 'Lydia',
                        lastname: 'Ying',
                        initials: 'LY'
                    },
                    {
                        userId: 3,
                        firstname: 'Rissa',
                        lastname: 'Chua',
                        initials: 'RC'
                    }
                ],
                pendingUsers: [],
                pollingOptions: [],
                contributors: [
                    {
                        userId: 1,
                        firstname: 'Maya',
                        lastname: 'Sundar',
                        initials: 'MS'
                    },
                    {
                        userId: 2,
                        firstname: 'Lydia',
                        lastname: 'Ying',
                        initials: 'LY'
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