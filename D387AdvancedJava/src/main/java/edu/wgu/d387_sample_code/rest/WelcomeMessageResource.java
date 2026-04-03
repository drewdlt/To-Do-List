package edu.wgu.d387_sample_code.rest;

import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.Properties;

@RestController
@RequestMapping("/api/welcome")
@CrossOrigin
public class WelcomeMessageResource {

    Properties messageProperties = new Properties();

    @GetMapping
    public ArrayList<String> getWelcomeMessages() throws InterruptedException {
        ArrayList<String> result = new ArrayList<>();

        Thread t1 = new Thread(() -> {
            try {
                String res;
                InputStream stream = new ClassPathResource("welcome-en.properties").getInputStream();
                messageProperties.load(stream);
                res = messageProperties.getProperty("welcome.message");
                result.add(res);
            } catch (Exception e) {
                e.printStackTrace();
            }
        });

        Thread t2 = new Thread(() -> {
            try {
                String res;
                InputStream stream = new ClassPathResource("welcome-fr.properties").getInputStream();
                messageProperties.load(stream);
                res = messageProperties.getProperty("welcome.message");
                result.add(res);
            } catch (Exception e) {
                e.printStackTrace();
            }
        });

        t1.start();
        t2.start();

        // Wait for both threads to complete before returning result
        t1.join();
        t2.join();

        return result;
    }

}
