import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://necdypzgleoqdcpxwhxt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lY2R5cHpnbGVvcWRjcHh3aHh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEzODg5NDksImV4cCI6MTk5Njk2NDk0OX0._G6PqkLfnTTfKbMTpxzPpbskg2n4ca4yrXWOMkIM93w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
