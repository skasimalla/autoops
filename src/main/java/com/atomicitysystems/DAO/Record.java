package com.atomicitysystems.DAO;

public class Record {

    private final long id;
    private final String content;

    public Record(long id, String content) {
        this.id = id;
        this.content = content;
    }

    public long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }
}
