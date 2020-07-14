import moment from 'moment';

export default {
    getEvents: function (date: moment.Moment) {
        const start = date.clone().add(10, 'hours');
        const end = date.clone().add(12, 'hours');

        return [
            {
                id: 1,
                title: 'Meeting',
                start: start.toDate(),
                end: end.toDate(),
                desc: 'Pre-meeting meeting, to prepare for the meeting',
            },
        ]
    }
};
