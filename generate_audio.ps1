Add-Type -AssemblyName System.Speech

$outputDir = "c:\Product\2nd-Brain\04_OUTPUT\tools\karate-english\audio"
$outputDir = "c:\Product\2nd-Brain\04_アウトプット\tools\karate-english\audio"

$phrases = @(
    "Welcome!"
    "Nice to meet you."
    "I'm the instructor."
    "Thank you for coming."
    "What's your name?"
    "Where are you from?"
    "Is this your first time in Japan?"
    "When did you arrive in Japan?"
    "How long are you staying?"
    "What do you do for a living?"
    "How long have you been practicing karate?"
    "What belt are you?"
    "What style do you practice?"
    "Who is your sensei?"
    "How do you like Japan?"
    "Do you like Japanese food?"
    "Do you have any injuries?"
    "Do you have any questions?"
    "Are you tired? Are you okay?"
    "Line up, please."
    "Bow."
    "Let's begin."
    "Get ready."
    "Start!"
    "Stop!"
    "One more time."
    "Watch carefully."
    "Like this."
    "Follow me."
    "Faster!"
    "Stronger!"
    "Slower."
    "Good job!"
    "Keep it up!"
    "Pair up."
    "Switch partners."
    "Take a break."
    "Drink some water."
    "That's all for today."
    "Thank you for your hard work."
    "Thank you for today."
    "It was great training with you."
    "Please come again anytime."
    "Have a safe trip back."
    "Did you enjoy it?"
    "Let's exchange contact info."
    "Let's take a photo!"
    "I look forward to seeing you again."
)

$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer

$voices = $synth.GetInstalledVoices() | Where-Object { $_.VoiceInfo.Culture.Name -like "en-*" }
if ($voices.Count -gt 0) {
    $synth.SelectVoice($voices[0].VoiceInfo.Name)
    Write-Host "Voice: $($voices[0].VoiceInfo.Name)"
} else {
    Write-Host "WARNING: No English voice found."
}

$synth.Rate = -2

for ($i = 0; $i -lt $phrases.Count; $i++) {
    $phrase = $phrases[$i]
    $filename = "phrase_{0:D3}.wav" -f $i
    $filepath = Join-Path $outputDir $filename
    
    $synth.SetOutputToWaveFile($filepath)
    $synth.Speak($phrase)
    
    Write-Host "[$i] $phrase -> $filename"
}

$synth.Dispose()
Write-Host "Done: $($phrases.Count) files generated"
