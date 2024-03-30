import java.io.FileWriter;
import java.io.IOException;
import java.io.StringWriter;
import java.util.List;

public class ExportData {

    public static void main(String[] args) {
        // Sample data
        List<Data> dataList = List.of(
                new Data("Stefan", 20),
                new Data("Matei", 18),
                new Data("Vasile", 19)
        );

        // Export to JSON
        exportToJson(dataList, "data.json");

        // Export to CSV
        exportToCsv(dataList, "data.csv");

        // Export to XML
        exportToXml(dataList, "data.xml");
    }

    private static void exportToJson(List<Data> dataList, String filename) {
        StringBuilder jsonBuilder = new StringBuilder();
        jsonBuilder.append("[\n");
        for (Data data : dataList) {
            jsonBuilder.append("  { \"Name\": \"").append(data.getName()).append("\", \"Age\": ").append(data.getAge()).append(" },\n");
        }
        // Remove the trailing comma and newline for the last item
        if (!dataList.isEmpty()) {
            jsonBuilder.delete(jsonBuilder.length() - 2, jsonBuilder.length());
        }
        jsonBuilder.append("\n]");

        try (FileWriter writer = new FileWriter(filename)) {
            writer.write(jsonBuilder.toString());
            System.out.println("JSON data exported successfully to " + filename);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static void exportToCsv(List<Data> dataList, String filename) {
        try (FileWriter writer = new FileWriter(filename)) {
            // Write CSV header
            writer.write("Name,Age\n");

            // Write CSV data
            for (Data data : dataList) {
                writer.write(data.getName() + "," + data.getAge() + "\n");
            }

            System.out.println("CSV data exported successfully to " + filename);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static void exportToXml(List<Data> dataList, String filename) {
        try (FileWriter writer = new FileWriter(filename)) {
            // Start building XML structure
            writer.write("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n");
            writer.write("<dataList>\n");
            for (Data data : dataList) {
                writer.write("  <data>\n");
                writer.write("    <Name>" + data.getName() + "</Name>\n");
                writer.write("    <Age>" + data.getAge() + "</Age>\n");
                writer.write("  </data>\n");
            }
            writer.write("</dataList>\n");

            System.out.println("XML data exported successfully to " + filename);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

// Define a class representing your data structure
class Data {
    private String name;
    private int age;

    public Data(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Getters and setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
