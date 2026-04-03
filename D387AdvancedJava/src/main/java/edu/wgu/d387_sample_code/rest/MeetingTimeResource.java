package edu.wgu.d387_sample_code.rest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;

@RestController
@RequestMapping("/api/meetings")
@CrossOrigin
public class MeetingTimeResource {

    @GetMapping
    public ArrayList<String> getMeetingTimes() {
        ArrayList<String> meetingTimes = new ArrayList<>();

        ZoneId etZone = ZoneId.of("America/New_York");
        ZoneId mtZone = ZoneId.of("America/Denver");
        ZoneId utcZone = ZoneId.of("UTC");
        ZoneId zoneId = ZoneId.systemDefault();

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("h:mm a z");

        LocalDateTime localTime = LocalDateTime.now();
        ZonedDateTime zonedDateTime = localTime.atZone(zoneId);

        // Get Eastern Time
        ZonedDateTime zonedDateTimeEastern = zonedDateTime.withZoneSameInstant(etZone);
//        System.out.println("Eastern time: " + zonedDateTimeEastern.format(formatter));
        meetingTimes.add(zonedDateTimeEastern.format(formatter));

        // Get Mountain Time
        ZonedDateTime zonedDateTimeMountain = zonedDateTime.withZoneSameInstant(mtZone);
//        System.out.println("Mountain time: " + zonedDateTimeMountain.format(formatter));
        meetingTimes.add(zonedDateTimeMountain.format(formatter));

        // Get Universal Time
        ZonedDateTime zonedDateTimeUniversal = zonedDateTime.withZoneSameInstant(utcZone);
//        System.out.println("Universal time: " + zonedDateTimeUniversal.format(formatter));
        meetingTimes.add(zonedDateTimeUniversal.format(formatter));

        // Return array of timestamps in string format
        return meetingTimes;
    }

    ;

}
