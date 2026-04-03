package edu.wgu.d387_sample_code.rest;

import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.Properties;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@RestController
@RequestMapping("/api/welcome")
@CrossOrigin
public class WelcomeMessageResource {

    public static ExecutorService messageExecutor= Executors.newFixedThreadPool(3);
    Properties messageProperties = new Properties();

    @GetMapping
    public ArrayList<String> getWelcomeMessages() {
        ArrayList<String> result = new ArrayList<>();

        messageExecutor.execute(() -> {
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

        messageExecutor.execute(() -> {
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

        return result;
    }

}
