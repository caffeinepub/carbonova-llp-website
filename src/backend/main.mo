import Principal "mo:core/Principal";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";

actor {
  type ContactSubmission = {
    name : Text;
    organization : Text;
    subject : Subject;
    message : Text;
    timestamp : Time.Time;
  };

  type Subject = {
    #partnership;
    #investment;
    #media;
    #general;
  };

  // Persistent map to store contact submissions
  let submissions = Map.empty<Text, ContactSubmission>();

  func assertAdmin(caller : Principal) {
    if (caller.isAnonymous()) {
      Runtime.trap("must have admin rights to run this function");
    };
  };

  public shared ({ caller }) func submitContact(
    name : Text,
    organization : Text,
    subject : Subject,
    message : Text,
  ) : async () {
    let submission : ContactSubmission = {
      name;
      organization;
      subject;
      message;
      timestamp = Time.now();
    };
    submissions.add(name, submission);
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    assertAdmin(caller);
    submissions.values().toArray();
  };
};
